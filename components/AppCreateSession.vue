<template>
  <nuxt-link
    to="controls"
    tag="button"
    :disabled="true"
    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
  >
    Create Session
  </nuxt-link>
</template>
<script>
export default {
  name: 'AppCreateSession',
}
</script>
