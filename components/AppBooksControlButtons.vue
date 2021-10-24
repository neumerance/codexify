<template>
  <div class="books">
    <h4 class="text-3xl mb-3 books__title">Books</h4>
    <div class="flex flex-wrap">
      <button
        class="books__buttons mr-2 mb-2"
        @click="selectBook(book.bookName)"
        :class="stateClasses(book.bookName)"
        :key="`book-${key}`"
        v-for="book, key in books">
        {{ book.abbr }}
      </button>
    </div>
  </div>
</template>
<script>
import BookChaptersAndVersesMappings from '~/configs/book_chapters_and_verses_mappings.json';

export default {
  name: 'AppBooksControlButtons',
  computed: {
    books() {
      return BookChaptersAndVersesMappings.map(book => ({ abbr: book.abbr, bookName: book.book }))
    }
  },
  methods: {
    stateClasses(bookName) {
      if (this.$store.state.bookName === bookName) {
        return 'bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded'
      } else {
        return 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded'
      }
    },
    selectBook(bookName) {
      this.$store.commit('SET_BOOK_NAME', bookName);
    }
  }
}
</script>
