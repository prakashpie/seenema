<template>
  <section class="">
    <div
      class="home-banner"
      :style="'background-image: url(' + item.Poster + ')'"
    ></div>
    <div class="rx-section">
      <div class="md-container md-container--box">
        <div class="md-row">
          <div class="md-col">
            <h2
              class="md-mb-2 pm-work-font md-typography-headline4-md md-typography-headline5 md-typography-font-light md-oh"
            >
              <span class="md-d-inline-block">
                {{ item.Title }}
              </span>
            </h2>
            <div class="md-typography-justify md-typography-subtitle1 pm-blog">
              <div>{{ item.Plot }}</div>
            </div>
          </div>
        </div>
        <div class="md-row cp-animate cp-animate--fade">
          <div class="md-col md-col--12">
            <div class="md-my-2 md-d-flex">
              <div class="md-d-flex md-align-items-center">
                <span class="cp-ml-1 md-list-content__title">
                  <strong>Genre : </strong>{{ item.Genre }}
                </span>
              </div>
              <div class="md-flex-grow-1"></div>
              <div
                class="md-d-flex md-align-items-center md-list-content__title"
              >
                <span class="cp-ml-1">
                  <strong>Released : </strong> {{ item.Released }}</span
                >
              </div>
            </div>
            <div class="md-my-2 md-d-flex">
              <div class="md-d-flex md-align-items-center">
                <span class="cp-ml-1 md-list-content__title">
                  <strong>Actors : </strong> {{ item.Actors }}
                </span>
              </div>
              <div class="md-flex-grow-1"></div>
              <div
                class="md-d-flex md-align-items-center md-list-content__title"
              >
                <span class="cp-ml-1">
                  <strong> Language : </strong>{{ item.Language }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const res = await $axios.get('', {
        params: {
          apikey: process.env.apiKey,
          i: params.id,
          r: 'json',
          plot: 'full'
        }
      })
      if (res.data) {
        return { item: res.data }
      } else {
        return { item: res.data }
        // return error({ statusCode: 404, message: 'Not found' })
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      return error({ statusCode: 404, message: 'Not found' })
    }
  },
  methods: {
    async fetchMeow() {
      const res = await this.$axios.get('', {
        params: {
          apikey: process.envAPI_KEY,
          i: 'tt1000774',
          r: 'json',
          plot: 'full'
        }
      })
      // eslint-disable-next-line no-console
      console.log(res)
    }
  }
}
</script>
