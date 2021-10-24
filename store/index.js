const initialState = () => ({
  translationCode: 'MBBTAG',
  bookName: 'Genesis',
  chapterId: 1,
  verseId: 1,
  sessionId: 11112
});

export const state = initialState;

export const getters = {
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
  }
};

export const actions = {
};
