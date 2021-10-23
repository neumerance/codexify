<template>
  <div class="verse px-8 py-6 bg-black bg-opacity-60 font-sans rounded-3xl w-full h-full">
    <div class="verse__header flex flex-col mb-5">
      <span v-if="scriptureName" class="verse__header-passage text-white text-7xl mb-4">{{ scriptureName }}</span>
      <span v-if="translationName" class="verse__header-bookname text-white text-4xl mb-4">{{ translationName }}</span>
    </div>
    <p v-if="scripture" class="verse__passage text-white text-4xl">{{ scripture }}</p>
  </div>
</template>
<script>
import bibleTranslationMapping from '~/configs/bible_translation_mappings.json';

export default {
  name: 'AppBibleVerse',
  props: {
    bookName: {
      type: String,
      required: true
    },
    chapterId: {
      type: String,
      required: true
    },
    verseId: {
      type: String,
      required: true
    },
    scripture: {
      type: String,
      required: true
    },
    translationCode: {
      type: String,
      required: true
    },
  },
  computed: {
    scriptureName() {
      if (this.bookName || this.chapterId || this.verseId) {
        return `${this.bookName} ${this.chapterId}:${this.verseId}`;
      }
    },
    translationName() {
      return bibleTranslationMapping[this.translationCode];
    },
  }
}
</script>
