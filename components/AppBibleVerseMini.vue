<template>
  <div id="verse">
    <div class="verse__header flex flex-col mb-1">
      <span class="verse__header-title text-current font-bold text-xs">{{ title }}</span>
      <span class="verse__header-bookname text-yellow-200 italic text-xs">{{ translationName }}</span>
    </div>
    <p v-if="scripture" class="verse__scripture text-current text-sm">{{ scripture }}</p>
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
