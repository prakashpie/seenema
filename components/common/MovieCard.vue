<template>
  <div class="md-card md-card--movie md-my-2">
    <div class="md-card__primary-action" @click="$emit('cardClicked', item)">
      <div
        :style="'background-image: url(' + item.Poster + ')'"
        class="md-card__media md-card__media--16-9"
      ></div>
    </div>
    <section class="md-card__primary">
      <div class="md-d-flex">
        <div class="md-d-flex md-flex-column md-justify-content-start">
          <div
            class="md-card__title-text md-card__title-text--large md-align-self-start"
          >
            {{ item.Title }}
          </div>
          <div class="md-card__meta-info">Released {{ item.Year }}</div>
        </div>
        <div class="md-flex-grow-1"></div>
        <fav :item="item" />
      </div>
    </section>
  </div>
</template>

<style>
.md-card--movie {
  max-width: 340px;
  width: 100%;
  margin: 0 auto;
}
</style>

<script>
import Fav from '@/components/common/Fav'
export default {
  name: 'MovieCard',
  components: { Fav },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
