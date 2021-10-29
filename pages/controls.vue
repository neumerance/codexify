<template>
  <div class="px-8 py-6">
    <app-translation-control-buttons></app-translation-control-buttons>
    <app-books-control-buttons></app-books-control-buttons>
    <app-chapters-control-buttons></app-chapters-control-buttons>
    <app-verses-control-buttons></app-verses-control-buttons>
  </div>
</template>
<script>
export default {
  name: 'Controls',
  middleware: 'require_session_token'
}
</script>
