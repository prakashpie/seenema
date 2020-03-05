import AsyncComponent from '@/assets/js/helper'
const openFetchDialog = {
  methods: {
    openFetchDialog(dialogPath) {
      if (!this.isEditComp) {
        this.$store.commit('core/setAppLoading', true)
        this.isEditComp = () => AsyncComponent(dialogPath)
        this.isEditComp()
          .component.then(() => {
            this.$store.commit('core/setAppLoading', false)
          })
          .catch(() => {
            this.isEditComp = false
            this.$store.commit('core/setAppLoading', false)
          })
      } else {
        $(`#${this.dialogId}`).MaterialDialog('show')
      }
    }
  }
}
export default openFetchDialog
