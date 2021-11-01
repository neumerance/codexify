<template>
  <div class="session-form">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 class="session-form__session-id text-center text-gray-200 text-2xl mb-2" :class="{['text-gray-400']: sessionId}">{{ sessionId || 'Dial Session ID' }}</h3>
      <app-dial-pad :session-id="sessionId"></app-dial-pad>
      <div class="flex items-center justify-between">
        <slot name="join-session"></slot>
        <slot name="create-session"></slot>
      </div>
    </div>
    <p class="text-center text-white text-xs">
      &copy;2021 MCGI.org. All rights reserved.
    </p>
  </div>
</template>
<script>
import AppDialPad from './AppDialPad.vue';
import { mapGetters } from 'vuex';

export default {
  components: { AppDialPad },
  name: 'AppSessionForm',
  methods: {
    onSessionIdChange() {
      this.$store.commit('SET_SESSION_ID', this.sessionId);
    }
  },
  computed: {
    ...mapGetters({
      sessionId: 'getSessionID'
    })
  },
}
</script>
<style scoped>
  .session-form__session-id {
    height: 40px;
  }
</style>