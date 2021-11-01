<template>
  <nuxt-link
    to="read"
    :event="buttonEnabled"
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
      if ((this.$store?.state?.sessionId?.length || 0) < 5) {
        return ''
      } else {
        return 'click'
      }
    }
  }
}
</script>
