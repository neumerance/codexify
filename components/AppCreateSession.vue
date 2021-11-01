<template>
  <nuxt-link
    to="controls"
    tag="button"
    :event="buttonEnabled"
    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
  >
    Create Session
  </nuxt-link>
</template>
<script>
export default {
  name: 'AppCreateSession',
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
