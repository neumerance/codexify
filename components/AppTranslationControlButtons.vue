<template>
  <div class="translation">
    <h4 class="text-3xl mb-3 translation__title">Translations</h4>
    <div class="flex flex-wrap">
      <button
        class="translation__buttons mr-2 mb-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        :key="`translation-${key}`"
        v-for="translation, key in translations">
        {{ translation }}
      </button>
    </div>
  </div>
</template>
<script>
import BibleTranslationMappings from '~/configs/bible_translation_mappings.json';

export default {
  name: 'AppTranslationControlButtons',
  computed: {
    translations() {
      return Object.keys(BibleTranslationMappings)
    }
  }
}
</script>
