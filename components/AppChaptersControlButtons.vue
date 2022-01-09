<template>
  <div id="chapters" class="chapters">
    <div class="flex flex-wrap">
      <a href="#" v-scroll-to="'#verses'"
        class="chapters__buttons m-1 block"
        @click="selectChapter(chapter.chapter)"
        :class="stateClasses(chapter.chapter)"
        :key="`chapter-${key}`"
        v-for="chapter, key in chapters">
        {{ chapter.chapter }}
      </a>
    </div>
  </div>
</template>
<script>
import BookChaptersAndVersesMappings from '~/configs/book_chapters_and_verses_mappings.json';
import controlMixin from '~/mixins/controls_mixin.js'

export default {
  name: 'AppChaptersControlButtons',
  mixins: [controlMixin],
  computed: {
    chapters() {
      return BookChaptersAndVersesMappings.find(book => book.book === this.$store.state.bookName).chapters
    }
  },
  methods: {
    stateClasses(chapterId) {
      if (this.$store.state.chapterId === parseInt(chapterId)) {
        return 'text-white bg-blue-500 hover:bg-white-200 hover:border-gray-300 border-2 text-center'
      } else {
        return 'text-gray-400 hover:text-black bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border-2 text-center'
      }
    },
    selectChapter(chapterId) {
      this.$store.commit('SET_CHAPTER_ID', chapterId);

      this.read();
    },
  }
}
</script>
<style scoped>
  .chapters__buttons {
    width: 60px;
    border-radius: 2px;
    line-height: 60px;
  }
</style>
