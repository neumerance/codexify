<template>
  <div id="verses" class="verses">
    <div class="flex flex-wrap">
      <a href="#"
        class="verses__buttons m-1"
        @click="selectVerse(index)"
        :class="stateClasses(index)"
        :key="`verse-${index}`"
        v-for="index in verseCount">
        {{ index }}
      </a>
    </div>
  </div>
</template>
<script>
import BookChaptersAndVersesMappings from '~/configs/book_chapters_and_verses_mappings.json';
import controlMixin from '~/mixins/controls_mixin.js'

export default {
  name: 'AppVersesControlButtons',
  mixins: [controlMixin],
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
         return 'text-white bg-blue-500 hover:bg-white-200 hover:border-gray-300 border-2 text-center'
      } else {
        return 'text-gray-400 hover:text-black bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border-2 text-center'
      }
    },
    selectVerse(verseId) {
      this.$store.commit('SET_VERSE_ID', verseId);

      this.read();
    },
  }
}
</script>
<style scoped>
  .verses__buttons {
    width: 60px;
    line-height: 60px;
    border-radius: 2px;
  }
</style>