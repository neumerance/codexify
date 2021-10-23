<template>
  <div class="read h-screen w-screen">
    <div v-if="data" class="w-full h-full px-8 py-6">
      <app-bible-verse
        :book-name="data.book_name"
        :chapter-id="data.chapter_id"
        :verse-id="data.verse_id"
        :scripture="data.content"
        :translation-code="data.translation_code"
      >
      </app-bible-verse>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Read',
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.$cable.subscribe({
      channel: 'ApplicationCable::BibleSessionsChannel',
      session_token: this.$route.params.session_id
    });
  },
  channels: {
    'ApplicationCable::BibleSessionsChannel': {
      connected() {
        console.log("I am connected to BibleSessionsChannel.");
      },
      received(data) {
        this.data = data;
      },
    },
  },
}
</script>
<style scoped>
  .read {
    background: url('~/assets/images/lush-green.webp');
    background-size: cover;
  }
</style>
