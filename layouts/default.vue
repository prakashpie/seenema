<template>
  <div>
    <AppHeader @drawerToggle="drawerToggle" />
    <nuxt class="main-layout" />
    <AppFooter />
    <MdOverlay v-if="appLoading" :fixed="true" :show="true" :cover="true">
      <MdCircularProgress theme="accent" :size="48" />
    </MdOverlay>
    <AppDrawer :show.sync="show" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data: () => ({
    assetsUrl: 'test',
    show: false
  }),
  computed: {
    ...mapGetters({
      appLoading: 'core/appLoading'
    })
  },
  methods: {
    drawerToggle() {
      this.show = !this.show
    }
  },
  head: () => ({
    bodyAttrs: {
      class: 'has-fixed-header'
    }
  })
}
</script>
