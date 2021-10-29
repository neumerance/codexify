<template>
  <div class="session-form">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="session_id">
          Join or create a session
        </label>
        <input
          @change="onSessionIdChange"
          v-model="sessionId"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="session_id"
          type="text"
          placeholder="Session ID"
        >
      </div>
      <div class="flex items-center justify-between">
        <slot name="join-session"></slot>
        <slot name="create-session"></slot>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2021 MCGI.org. All rights reserved.
    </p>
  </div>
</template>
<script>
export default {
  name: 'AppSessionForm',
  data() {
    return {
      sessionId: ''
    }
  },
  methods: {
    onSessionIdChange() {
      this.$store.commit('SET_SESSION_ID', this.sessionId);
    }
  }
}
</script>
