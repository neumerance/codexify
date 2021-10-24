export default {
  methods: {
    async read() {
      const { translationCode, bookName, chapterId, verseId, sessionId } = this.$store.state;

      await this.$axios.get(
        `/api/read/${translationCode}/${bookName}/${chapterId}/${verseId}/${sessionId}`
      )
    }
  }
}
