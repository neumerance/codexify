import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());

const apiErrorHandler = (res, e, message) => {
  console.log('[Error] Api call failed', message, e);

  if (e && e.response && e.response.status) {
    res.status(e.response.status).json({
      message,
      ...e.response.data
    });
  } else {
    res.status(500).json({
      message
    });
  }
};

app.get('/read/:translation_code/:book_name/:chapter_id/:verse_id/:session_token', async (req, res) => {
  const {
    translation_code: translationCode,
    book_name: bookName,
    chapter_id: chapterId,
    verse_id: verseId,
    session_token: sessionToken
  } = req.params;
  console.log('sessionToken', sessionToken);
  axios.post(
    `${process.env.codexifyApiBaseUrl}/api/v1/bible/${translationCode}/${bookName}/${chapterId}/${verseId}/read`,
    {},
    {
      headers: {
        'SESSION_TOKEN': sessionToken
      }
    }
  ).then(_response => res.send('ok'))
  .catch(error => {
    console.log('error', error);
    apiErrorHandler(res, error, 'An error occurred on the endpoint')
  });
});

module.exports = {
  path: `/api`,
  handler: app,
  apiErrorHandler
};
