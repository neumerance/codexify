<template>
  <div class="verse bg-black bg-opacity-60 font-sans rounded-3xl w-full h-full">
    <div class="verse__header flex flex-col mb-4">
      <span v-if="title" class="verse__header-title text-white mb-3">{{ title }}</span>
      <span v-if="translationName" class="verse__header-bookname text-white text-yellow-200 italic">{{ translationName }}</span>
    </div>
    <p v-if="scripture" class="verse__scripture text-white">{{ scripture }}</p>
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
<style scoped>
  .verse {
    padding: calc((75vw - 4.5rem) / 30);
  }
  .verse__header-title {
    font-size: calc((75vw - 4.5rem) / 14);
    line-height: 1em;
  }
  .verse__header-bookname {
    font-size: calc((75vw - 4.5rem) / 22);
    line-height: 1em;
  }
  .verse__scripture {
    font-size: calc((75vw - 4.5rem) / 18);
    line-height: 1em;
  }
</style>
