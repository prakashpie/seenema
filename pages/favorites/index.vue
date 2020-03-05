<template>
  <section>
    <div class="rx-section">
      <div class="md-container md-container--box">
        <div v-if="!showEmpty" class="md-row">
          <div
            v-for="(item, index) in favoriteItemList"
            :key="index"
            class="md-col md-col--4"
          >
            <movie-card :item="item" @cardClicked="onCardClicked"></movie-card>
          </div>
        </div>
        <div v-else class="md-row">
          <div class="md-col md-col--12">
            <div class="md-empty-state">
              <div class="md-empty-state__graphic-container">
                <img src="/movie-banner.svg" class="md-empty-state__graphic" />
              </div>
              <div class="md-empty-state__content-wrapper">
                <div
                  class="md-typo--title md-empty-state__title my-typo--font-light"
                >
                  No Favorites Movies, Series or Episodes found
                </div>
                <div class="md-empty-state__subtext">
                  All your favorite items will appear here!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MovieCard from '@/components/common/MovieCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: { MovieCard },
  computed: {
    ...mapGetters({
      favoriteItemList: 'core/favoriteItemList'
    }),
    showEmpty() {
      return !this.favoriteItemList.length
    }
  },
  mounted() {
    this.$store.dispatch('core/getUpdatedFavoriteList')
  },
  methods: {
    onCardClicked(item) {
      this.$router.push('/' + item.imdbID)
    }
  }
}
</script>
