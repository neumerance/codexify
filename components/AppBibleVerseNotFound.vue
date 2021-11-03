<template>
  <div class="verse bg-black bg-opacity-60 font-sans rounded-3xl w-full h-full">
    <div class="verse__header flex flex-col mb-4">
      <span class="verse__header-title text-white mb-3">
        Verse Not Found
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppBibleVerseNotFound'
}
</script>
<style scoped>
  .verse {
    padding: calc((75vw - 4.5rem) / 30);
  }
  .verse__header-title {
    font-size: calc((75vw - 4.5rem) / 14);
    line-height: 1em;
  }
</style>
