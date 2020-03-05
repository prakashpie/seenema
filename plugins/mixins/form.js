export default {
  data: () => ({
    assetsUrl: process.env.assetsUrl,
    baseUrl: process.env.baseUrl,
    isChanges: false,
    loading: false,
    inputs: {},
    errors: {},
    item: {}
  }),
  watch: {
    inputs() {
      if (!this.isChanges) {
        this.isChanges = true
      }
    }
  },
  methods: {
    resetErrors() {
      this.errors = {}
    },
    handleError(errorResponse) {
      // eslint-disable-next-line no-console
      console.log(errorResponse)
      if (
        errorResponse &&
        (errorResponse.status === 400 || errorResponse.status === 401)
      ) {
        const errors = errorResponse.data
        errors.forEach(item => {
          this.errors[item.field] = item.message
          this.$refs[item.field].$el
            .querySelector('.md-text-field__input')
            .focus()
        })
      }
    }
  }
}
