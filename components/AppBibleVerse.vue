<template>
  <div class="verse px-8 py-6 bg-black bg-opacity-60 font-sans rounded-3xl w-full h-full">
    <div class="verse__header flex flex-col mb-5">
      <span v-if="title" class="verse__header-passage text-white text-7xl mb-4">{{ title }}</span>
      <span v-if="translationName" class="verse__header-bookname text-white text-4xl mb-4">{{ translationName }}</span>
    </div>
    <p v-if="scripture" class="verse__passage text-white text-7xl">{{ scripture }}</p>
  </div>
</template>
<script>
import bibleTranslationMapping from '~/configs/bible_translation_mappings.json';

export default {
  name: 'AppBibleVerse',
  props: {
    title: {
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
    translationName() {
      return bibleTranslationMapping[this.translationCode];
    },
  }
}
</script>
