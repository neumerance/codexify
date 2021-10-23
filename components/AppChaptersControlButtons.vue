<template>
  <div class="chapters">
    <h4 class="text-3xl mb-3 translation__title">Chapters</h4>
    <div class="flex flex-wrap">
      <button
        class="chapters__buttons mr-2 mb-2"
        @click="selectChapter(chapter.chapter)"
        :class="stateClasses(chapter.chapter)"
        :key="`chapters-${key}`"
        v-for="chapter, key in chapters">
        {{ chapter.chapter }}
      </button>
    </div>
  </div>
</template>
<script>
import BookChaptersAndVersesMappings from '~/configs/book_chapters_and_verses_mappings.json';

export default {
  name: 'AppChaptersControlButtons',
  computed: {
    chapters() {
      return BookChaptersAndVersesMappings.find(book => book.abbr === this.$store.state.bookAbbr).chapters
    }
  },
  methods: {
    stateClasses(chapterId) {
      if (this.$store.state.chapterId === parseInt(chapterId)) {
        return 'bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded'
      } else {
        return 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded'
      }
    },
    selectChapter(chapterId) {
      this.$store.commit('SET_CHAPTER_ID', chapterId);
    }
  }
}
</script>
