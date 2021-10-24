<template>
  <div class="read h-screen w-screen">
    <div v-if="data && !data.not_found" class="w-full h-full px-8 py-6">
      <app-bible-verse
        :title="data.title"
        :scripture="data.content"
        :translation-code="data.translation_code"
      >
      </app-bible-verse>
    </div>
    <div v-else class="w-full h-full px-8 py-6">
      <app-bible-verse-not-found>
      </app-bible-verse-not-found>
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
