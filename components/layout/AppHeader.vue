<template>
  <header
    id="cp-navbar"
    :class="{ 'cp-show-back': showBack }"
    role="banner"
    class="md-top-app-bar md-top-app-bar--casting-border md-top-app-bar--fixed cp-show"
  >
    <div class="header-background"></div>
    <div class="md-container md-container--gutter-24-md md-container--gutter">
      <div class="cp-show__icon">
        <MdIconButton
          class="md-top-app-bar__navigation-icon"
          @click="goBack"
          icon="arrow_back"
        />
      </div>
      <div class="md-top-app-bar__row">
        <div
          class="md-top-app-bar__section cp-top-app-bar__section--start md-justify-content-start"
        >
          <MdIconButton
            v-if="showBack"
            @click="goBack"
            class="md-top-app-bar__navigation-icon md-d-none-sm"
            icon="arrow_back"
          />
          <MdIconButton
            v-else=""
            @click="$emit('drawerToggle')"
            class="md-top-app-bar__navigation-icon md-d-none-sm"
            icon="menu"
          />
          <nuxt-link to="/" class="md-top-app-bar__brand md-align-self-start">
            <img
              src="/movie-logo.svg"
              class="gb_0a gb_Fe md-d-none md-d-block-sm"
              alt="logo"
              aria-hidden="true"
              style="height: 40px;"
            />
          </nuxt-link>
          <div class="md-top-app-bar__title">Seenema</div>
        </div>
        <div class="md-d-flex md-flex-grow-1" />
        <div
          class="md-top-app-bar__section md-justify-content-end md-align-self-start"
        >
          <app-nav :navs="navs" class="md-nav--hidden-tablet" />
          <div>
            <MdButton
              label="Favorites"
              :outlined="true"
              class="md-button--primary"
              @click="$router.push('/favorites')"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
body.has-fixed-header {
  /*  padding-top: 128px;*/
}
.cp-show .cp-top-app-bar__section--start {
  transition: transform 0.3s ease;
}
.cp-show .cp-show__icon {
  position: absolute;
  left: 24px;
  top: 8px;
  z-index: 2;
  opacity: 0;
  height: 48px;
  width: 48px;
}
@media (min-width: 600px) {
  .cp-show-back .cp-top-app-bar__section--start {
    transform: translateX(40px);
  }
  .cp-show-back .cp-show__icon {
    opacity: 1;
  }
}
.md-top-app-bar.transition-on .header-background {
  transition: transform 400ms ease-in-out;
}
.md-top-app-bar .header-background {
  transform: translateY(-80px);
}
.md-top-app-bar .md-top-app-bar__title {
  opacity: 0;
  transition: opacity 400ms ease-in-out;
}
.md-top-app-bar.header-top .header-background {
  transform: translateY(0);
}
.md-top-app-bar.header-top .md-top-app-bar__title {
  opacity: 1;
}
.header-background {
  background-color: #fff;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.13);
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

@media screen and (max-width: 599px) {
  .md-top-app-bar .header-background {
    transform: none;
  }
  .md-top-app-bar .header-background {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
  .md-top-app-bar.header-top .header-background {
    opacity: 1;
  }
}

.header-light.md-top-app-bar {
  color: var(--color-app-text);
}
.header-light.md-top-app-bar:not(.header-top) {
  --color-app-text: rgba(var(--color-light-text));
  --color-app-text-secondary: rgba(var(--color-light-secondary-text));
}
.header-light.md-top-app-bar:not(.header-top) .md-button--outlined {
  --button-color: var(--color-app-text);
}
.cp-top-app-bar--no-animating {
  background: #ffffff;
}
.cp-top-app-bar--no-animating .header-background {
  display: none;
}
</style>
<script>
import { mapGetters } from 'vuex'
import AppNav from '../ui/AppNav'

export default {
  components: { AppNav },
  head() {
    return {
      bodyAttrs: {
        'data-shimmer': true
      }
    }
  },
  data: () => ({
    navs: [],
    assetsUrl: process.env.assetsUrl,
    lastScrollTop: 0,
    prominentElement: null
  }),
  computed: {
    ...mapGetters({
      history: 'core/getHistory'
    }),
    getQueryString() {
      return this.$route.fullPath.substring(this.$route.path.length)
    },
    startScroll() {
      return this.scroll.startScroll
    },
    endScroll() {
      return this.scroll.endScroll
    },
    showBack() {
      return this.$route.path !== '/'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/signin' + this.getQueryString)
    },
    handleScroll(e) {
      const currentScrollTop = window.scrollY
      if (currentScrollTop > this.lastScrollTop) {
        this.handleScrollDown(e)
      } else {
        this.handleScrollUp(e)
      }
      this.lastScrollTop = currentScrollTop
    },
    handleScrollDown(e) {
      const currentScrollTop = window.scrollY
      if (currentScrollTop >= this.startScroll) {
        this.prominentElement.classList.add('header-top')
      }
    },
    handleScrollUp(e) {
      const currentScrollTop = window.scrollY
      if (currentScrollTop <= this.endScroll) {
        this.prominentElement.classList.remove('header-top')
      }
    },
    goBack() {
      this.$store.commit('core/setData', {
        name: 'backButtonClicked',
        data: true
      })
      const history = this.$store.state.core.history
      if (history.length > 1) {
        const lastHistoryToPush = history[history.length - 2]
        this.$store.commit('core/popData', 'history')
        this.$router.push(lastHistoryToPush)
      } else {
        // push to home
        this.$router.push('/')
      }
    }
  }
}
</script>
