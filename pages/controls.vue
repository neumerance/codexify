<template>
  <div class="controls h-screen lg:max-h-screen flex justify-center overscroll-none overflow-hidden">
    <div v-if="isOnPortraitMode" class="flex flex-col center">
      <h2 class="text-center">Please landscape your devise orientation</h2>
    </div>
    <div v-else class="flex flex-row">
      <div class="mr-5">
        <h4 class="text-1xl text-white font-light mb-3 translation__title">Translations</h4>
        <div class="h-full bg-white pb-20 overflow-y-scroll overscroll-none">
          <app-translation-control-buttons></app-translation-control-buttons>
        </div>
      </div>
      <div class="mr-5">
        <h4 class="text-1xl text-white font-light mb-3 books__title">Books</h4>
        <div class="h-full bg-white pb-20 overflow-y-scroll overscroll-none">
          <app-books-control-buttons></app-books-control-buttons>
        </div>
      </div>
      <div class="mr-5">
        <h4 class="text-1xl text-white font-light mb-3 translation__title">Chapters</h4>
        <div class="h-full w-20 lg:w-72 pb-20 bg-white overflow-y-scroll overscroll-none">
          <app-chapters-control-buttons></app-chapters-control-buttons>
        </div>
      </div>
      <div class="mr-5">
        <h4 class="text-1xl text-white font-light mb-3 translation__title">Verses</h4>
        <div class="h-full w-20 lg:w-72 pb-20 bg-white overflow-y-scroll overscroll-none">
          <app-verses-control-buttons></app-verses-control-buttons>
        </div>
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
  .controls {
     background: rgb(48,48,48);
     background: linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(106,106,107,1) 40%, rgba(106,106,107,1) 76%, rgba(32,30,30,1) 100%);
  }
  .center {
    justify-content: center;
  }
</style>
