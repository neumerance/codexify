<template>
  <div class="chapters">
    <h4 class="text-3xl mb-3 translation__title">Chapters</h4>
    <div class="flex flex-wrap">
      <button
        class="chapters__buttons mr-2 mb-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
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
  data() {
    return {
      bookAbbr: 'Gen'
    }
  },
  computed: {
    chapters() {
      return BookChaptersAndVersesMappings.find(book => book.abbr === this.bookAbbr).chapters
    }
  }
}
</script>
