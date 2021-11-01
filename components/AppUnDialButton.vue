<template>
  <button
    @click="unDialNumber"
    class="button text-gray-400 hover:text-black bg-gray-100 hover:bg-gray-200 hover: border-gray-300 border-2 text-center">
    {{ number }}
  </button>
</template>
<script>
export default {
  name: 'AppUnDialButton',
  props: {
    number: {
      type: String,
      default: ''
    }
  },
  methods: {
    unDialNumber() {
      this.$store.commit('UNDIAL_SESSION_ID');
    }
  }
}
</script>
<style scoped>
  .button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>