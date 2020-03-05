<template>
  <nav class="md-nav md-nav--dense md-nav--tabs">
    <AppLink
      v-for="(nav, index) in navs"
      :key="index + nav.link"
      :to="nav.link"
      class="md-nav__link "
    >
      <i v-if="nav.icon" class="md-tab-link__icon material-icons">
        {{ nav.icon }}
      </i>
      <span class="md-tab-link__text">
        {{ nav.title }}
      </span>
    </AppLink>
  </nav>
</template>

<script>
import AppLink from './AppLink'

export default {
  components: { AppLink },
  props: {
    navs: {
      type: Array,
      required: true
    }
  }
}
</script>
