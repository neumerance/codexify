<template>
  <div class="px-8 py-6">
    <div v-if="isOnPortraitMode" class="h-screen flex flex-col center">
      <h2 class="text-center">Please landscape your devise orientation</h2>
    </div>
    <div v-else>
      <app-translation-control-buttons></app-translation-control-buttons>
      <app-books-control-buttons></app-books-control-buttons>
      <app-chapters-control-buttons></app-chapters-control-buttons>
      <app-verses-control-buttons></app-verses-control-buttons>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Controls',
  middleware: 'require_session_token',
  data() {
    return {
      orientation: 0
    }
  },
  computed: {
    isOnPortraitMode() {
      if (typeof screen.orientation !== 'undefined') {
        return false;
      }

      return this.orientation == 0;
    }
  },
  mounted() {
    window.addEventListener("orientationchange", () => {
      this.orientation = window.orientation;
    }, false);
  },
}
</script>
<style scoped>
  .center {
    justify-content: center;
  }
</style>