<template>
  <div>
    <div v-if="isOnPortraitMode" class="h-screen flex flex-col center">
      <h2 class="text-center">Please landscape your devise orientation</h2>
    </div>
    <div v-else class="read h-screen w-screen">
      <div v-if="data && !data.not_found" class="w-full h-full px-8 py-6">
        <app-bible-verse
          :title="data.title"
          :scripture="data.content"
          :translation-code="data.translation_code"
        >
        </app-bible-verse>
      </div>
      <div v-else class="w-full h-full px-8 py-6">
        <app-bible-verse-not-found>
        </app-bible-verse-not-found>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Read',
  middleware: 'require_session_token',
  data() {
    return {
      data: null,
      orientation: 0
    }
  },
  computed: {
    ...mapGetters({
      sessionToken: 'getSessionToken'
    }),
    isOnPortraitMode() {
      if (typeof screen.orientation !== 'undefined') {
        return false;
      }

      return this.orientation == 0;
    }
  },
  mounted() {
    this.$cable.subscribe({
      channel: 'ApplicationCable::BibleSessionsChannel',
      session_token: this.sessionToken
    });

    window.addEventListener("orientationchange", () => {
      this.orientation = window.orientation;
    }, false);
  },
  channels: {
    'ApplicationCable::BibleSessionsChannel': {
      connected() {
        console.log("I am connected to BibleSessionsChannel.");
      },
      received(data) {
        this.data = data;
      },
    },
  },
}
</script>
<style scoped>
  .read {
    background: url('~/assets/images/lush-green.webp');
    background-size: cover;
  }
  .center {
    justify-content: center;
  }
</style>
