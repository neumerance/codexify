<template>
  <nuxt-link
    to="read"
    :disabled="buttonEnabled"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Join
  </nuxt-link>
</template>
<script>
export default {
  name: 'AppJoinSession',
  computed: {
    buttonEnabled() {
      return this.$store.state.sessionId &&
        this.$store.state.sessionId.length < 5
    }
  }
}
</script>
