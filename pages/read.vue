<template>
  <div class="read">
    <div v-if="isOnPortraitMode" class="h-screen flex flex-col center">
      <h2 class="text-center">Please landscape your devise orientation</h2>
    </div>
    <div v-else class="h-screen w-screen">
      <div v-if="data && !data.not_found" class="read__overlay w-full h-full">
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
  scrollToTop: true,
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      },
    ]
  },
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
  .read__overlay {
    padding: calc((75vw - 4.5rem) / 34);
  }
  .center {
    justify-content: center;
  }
</style>
