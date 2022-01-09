<template>
  <div id="books" class="books">
    <ul class="list-none">
      <li>
        <a
          href="#" v-scroll-to="'#chapters'"
          class="books__buttons block"
          @click="selectBook(book.bookName)"
          :class="stateClasses(book.bookName)"
          :key="`book-${key}`"
          v-for="book, key in books"
        >
          {{ book.bookName }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import BookChaptersAndVersesMappings from '~/configs/book_chapters_and_verses_mappings.json';
import controlMixin from '~/mixins/controls_mixin.js'

export default {
  name: 'AppBooksControlButtons',
  mixins: [controlMixin],
  computed: {
    books() {
      return BookChaptersAndVersesMappings.
        map(book => ({ abbr: book.abbr, bookName: book.book }))
    }
  },
  methods: {
    stateClasses(bookName) {
      if (this.$store.state.bookName === bookName) {
        return 'bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4'
      } else {
        return 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4'
      }
    },
    selectBook(bookName) {
      this.$store.commit('SET_BOOK_NAME', bookName);

      this.read();
    }
  }
}
</script>
