<template>
  <button
    @click="dialNumber"
    class="button text-gray-400 hover:text-black bg-gray-100 hover:bg-gray-200 hover: border-gray-300 border-2 text-center">
    {{ number }}
  </button>
</template>
<script>
export default {
  name: 'AppDialButton',
  props: {
    number: {
      type: String,
      default: ''
    }
  },
  methods: {
    dialNumber() {
      this.$store.commit('DIAL_SESSION_ID', this.number);
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