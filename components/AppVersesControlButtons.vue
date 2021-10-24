<template>
  <div class="verses">
    <h4 class="text-3xl mb-3 translation__title">Verses</h4>
    <div class="flex flex-wrap">
      <button
        class="verses__buttons mr-2 mb-2"
        @click="selectVerse(index)"
        :class="stateClasses(index)"
        :key="`verses-${index}`"
        v-for="index in verseCount">
        {{ index }}
      </button>
    </div>
  </div>
</template>
<script>
import BookChaptersAndVersesMappings from '~/configs/book_chapters_and_verses_mappings.json';

export default {
  name: 'AppVersesControlButtons',
  computed: {
    chapters() {
      return BookChaptersAndVersesMappings.find(book => book.book === this.$store.state.bookName).chapters
    },
    verseCount() {
      return parseInt(this.chapters.find(chapter => parseInt(chapter.chapter) === this.$store.state.chapterId).verses);
    }
  },
  methods: {
    stateClasses(verseId) {
      if (this.$store.state.verseId === parseInt(verseId)) {
        return 'bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded'
      } else {
        return 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded'
      }
    },
    selectVerse(verseId) {
      this.$store.commit('SET_VERSE_ID', verseId);
    }
  }
}
</script>
