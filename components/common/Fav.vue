<template>
  <button class="md-icon-button md-icon-button--primary" @click="toggleFav">
    <i class="md-icon-button__icon material-icons">{{
      isFav ? 'favorite' : 'favorite_outlined'
    }}</i>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Fav',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      favoriteItemList: 'core/favoriteItemList'
    }),
    isFav() {
      return this.favoriteItemList.find(item => {
        return item.imdbID === this.item.imdbID
      })
    }
  },
  mounted() {
    this.$store.dispatch('core/getUpdatedFavoriteList')
  },
  methods: {
    toggleFav() {
      this.$store.dispatch('core/toggleFav', this.item)
    }
  }
}
</script>
