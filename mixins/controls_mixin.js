import { mapGetters } from 'vuex';

export default {
  methods: {
    async read() {
      const { translationCode, bookName, chapterId, verseId } = this.$store.state;

      await this.$axios.get(
        `${process.env.appBaseUrl}/api/read/${translationCode}/${bookName}/${chapterId}/${verseId}/${this.sessionToken}`
      )
    },
  },
  computed: {
    ...mapGetters({
      sessionToken: 'getSessionToken'
    })
  },
}
