const initialState = () => ({
  translationCode: 'MBBTAG',
  bookName: 'Genesis',
  chapterId: 1,
  verseId: 1,
  sessionId: null,
  sessionToken: null
});

export const state = initialState;

export const getters = {
  getSessionToken(state) {
    return state.sessionToken;
  },
  getSessionID(state) {
    return state.sessionId;
  }
};

export const mutations = {
  SET_TRANSLATION_CODE(state, translationCode) {
    state.translationCode = translationCode;
  },
  SET_BOOK_NAME(state, bookName) {
    state.chapterId = 1;
    state.verseId = 1;
    state.bookName = bookName;
  },
  SET_CHAPTER_ID(state, chapterId) {
    state.verseId = 1;
    state.chapterId = parseInt(chapterId);
  },
  SET_VERSE_ID(state, verseId) {
    state.verseId = parseInt(verseId);
  },
  SET_SESSION_ID(state, sessionId) {
    if (sessionId && sessionId.length <= 5) {
      state.sessionId = sessionId;

      const token = generateSessionTokenFromSessionId(state.sessionId);

      state.sessionToken = token;
    }
  },
  DIAL_SESSION_ID(state, number) {
    const dialedSessionId = `${state.sessionId || ''}${number}`;

    if (dialedSessionId.length <= 5) {
      state.sessionId = dialedSessionId
      const token = generateSessionTokenFromSessionId(state.sessionId);

      state.sessionToken = token;
    }
  },
  UNDIAL_SESSION_ID(state) {
    if (state.sessionId && state.sessionId.length >= 1) {
      const dialedSessionId = state.sessionId.slice(0, -1);
      state.sessionId = dialedSessionId;
    }
  }
};

const generateSessionTokenFromSessionId = (sessionId) => {
  sessionId = sessionId.replace('-', '');
  return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c, p) {
    return sessionId[p % sessionId.length];
  });
}

export const actions = {
};
