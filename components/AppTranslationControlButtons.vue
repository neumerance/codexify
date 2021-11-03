<template>
  <div class="translation">
    <ul class="list-none">
      <li
        class="translation__buttons rounded-none"
        :class="stateClasses(translation)"
        :key="`translation-${key}`"
        @click="selectTranslation(translation)"
        v-for="translation, key in translations">
        {{ translation }}
      </li>
    </ul>
  </div>
</template>
<script>
import BibleTranslationMappings from '~/configs/bible_translation_mappings.json';
import controlMixin from '~/mixins/controls_mixin.js'

export default {
  name: 'AppTranslationControlButtons',
  mixins: [controlMixin],
  computed: {
    translations() {
      return Object.keys(BibleTranslationMappings)
    },
  },
  methods: {
    stateClasses(translationCode) {
      if (this.$store.state.translationCode === translationCode) {
        return 'bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4'
      } else {
        return 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4'
      }
    },
    selectTranslation(translationCode) {
      this.$store.commit('SET_TRANSLATION_CODE', translationCode);

      this.read();
    }
  }
}
</script>
