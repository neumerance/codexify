<template>
  <div class="controls">
    <app-bible-verse-mini
      v-if="data"
      :title="data.title"
      :scripture="data.content"
      :translation-code="data.translation_code"
    >
    </app-bible-verse-mini>
    <div class="border-b-2">
      <div class="bg-white">
        <app-translation-control-buttons></app-translation-control-buttons>
      </div>
    </div>
    <div class="border-b-2">
      <div class="bg-white">
        <app-books-control-buttons></app-books-control-buttons>
      </div>
    </div>
    <div class="border-b-2">
      <div class="bg-white">
        <app-chapters-control-buttons></app-chapters-control-buttons>
      </div>
    </div>
    <div class="border-b-2">
      <div class="bg-white">
        <app-verses-control-buttons></app-verses-control-buttons>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Controls',
  middleware: 'require_session_token',
  data() {
    return {
      data: null,
    }
  },
  computed: {
    ...mapGetters({
      sessionToken: 'getSessionToken'
    }),
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

