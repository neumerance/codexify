<template>
  <div class="verses">
    <h4 class="text-3xl mb-3 translation__title">Verses</h4>
    <div class="flex flex-wrap">
      <button
        class="verses__buttons mr-2 mb-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
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
  data() {
    return {
      bookAbbr: 'Gen',
      chapterId: "1"
    }
  },
  computed: {
    chapters() {
      return BookChaptersAndVersesMappings.find(book => book.abbr === this.bookAbbr).chapters
    },
    verseCount() {
      return parseInt(this.chapters.find(chapter => chapter.chapter === this.chapterId).verses);
    }
  }
}
</script>
