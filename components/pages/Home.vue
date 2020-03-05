<template>
  <section>
    <div class="home-banner">
      <div class="movie-search">
        <form
          style="max-width: 520px;margin: 24px auto"
          class="input-group"
          @submit.prevent="onSearchSubmit"
        >
          <div
            class="md-menu-surface--anchor input-group-dropdown md-flex-shrink-0"
          >
            <button
              type="button"
              class="md-button md-button--block md-button--large md-button--accent md-text-black md-button--unelevated md-button--raised"
              @click="toggleDropdown"
            >
              <span class="md-button__label md-typography-left">
                {{ formInput.selectionType.option }}
              </span>
              <i class="md-button__icon material-icons">keyboard_arrow_down</i>
            </button>
            <div
              class="md-menu md-menu-surface"
              :class="{ 'md-menu-surface--open': dropdownOpen }"
              style="top: 0;left: 0"
            >
              <ul class="md-list">
                <li
                  v-for="item in dropdowList"
                  :key="item.value"
                  class="md-list-item"
                  role="menuitem"
                  :class="{
                    'md-list-item--selected':
                      item.value === formInput.selectionType
                  }"
                  @click="handleDropDown(item)"
                >
                  <div class="md-list-content">
                    <div class="md-list-content__title">
                      {{ item.option }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="md-interactive md-interactive--dense"
            :class="{
              'md-interactive--focused': interactive.focused,
              'md-interactive--dirty': !!formInput.search
            }"
          >
            <div class="md-interactive__placeholder">
              Search movies, series or episodes
            </div>
            <input
              v-model="formInput.search"
              required="required"
              type="text"
              class="md-interactive__input md-pl-2"
              @focus="interactive.focused = true"
              @blur="interactive.focused = false"
            />
          </div>
          <button
            :class="{ 'md-button--loading': loading }"
            class="md-button md-px-2 md-flex-shrink-0 md-button--large md-button--primary md-button--unelevated md-button--raised"
          >
            <span class="md-button__label">{{
              loading ? 'Loading...' : 'Search'
            }}</span>
          </button>
        </form>
      </div>
    </div>
    <div class="rx-section" id="result">
      <div class="md-container md-container--box">
        <div v-if="loading" class="md-row">
          <div v-for="index in 3" :key="index" class="md-col md-col--4">
            <movie-card-shimmer></movie-card-shimmer>
          </div>
        </div>
        <div v-else-if="!showEmpty" class="md-row">
          <div
            v-for="(item, index) in movieList"
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
                  No
                  {{
                    formInput.selectionType.value
                      ? formInput.selectionType.value.toUpperCase()
                      : 'Movies, Series or Episodes'
                  }}
                  found
                </div>
                <div class="md-empty-state__subtext">
                  Try changing your keywords and try again!
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
import MovieCardShimmer from '@/components/common/MovieCardShimmer'
export default {
  name: 'Home',
  components: { MovieCardShimmer, MovieCard },
  data: () => ({
    formInput: {
      search: '',
      selectionType: { option: 'All', value: '' }
    },
    interactive: {
      focused: ''
    },
    dropdownOpen: false,
    showEmpty: false,
    loading: false,
    dropdowList: [
      {
        option: 'All',
        value: ''
      },
      {
        option: 'Movie',
        value: 'movie'
      },
      {
        option: 'Series',
        value: 'series'
      },
      {
        option: 'Episodes',
        value: 'episodes'
      }
    ],
    movieList: []
  }),
  methods: {
    handleDropDown(val) {
      this.formInput.selectionType = val
      setTimeout(() => {
        this.toggleDropdown()
      }, 100)
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    async onSearchSubmit() {
      this.loading = true
      this.showEmpty = false
      try {
        const res = await this.$axios.get('', {
          params: {
            apikey: 'afdd7478',
            s: this.formInput.search,
            type: this.formInput.selectionType.value,
            page: 1,
            r: 'json'
          }
        })
        if (res.data.Response) {
          this.movieList = res.data.Search
        } else {
          this.showEmpty = true
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
      this.loading = false
    },
    onCardClicked(item) {
      this.$router.push('/' + item.imdbID)
    }
  }
}
</script>
