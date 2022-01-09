<template>
  <div class="controls">
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
export default {
  name: 'Controls',
  middleware: 'require_session_token',
  scrollToTop: true,
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      },
    ]
  },
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
