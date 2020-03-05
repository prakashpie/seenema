<template>
  <div class="md-card md-card--movie md-shimmer">
    <div class="md-card__media md-card__media--16-9 md-shimmer__item"></div>
    <section class="md-card__primary">
      <div class="md-d-flex">
        <div
          class="md-d-flex md-flex-column md-justify-content-start"
          style="width: 100%"
        >
          <div
            class="md-card__title-text md-shimmer__item--headline md-shimmer__item md-card__title-text--large md-align-self-start"
          ></div>
          <div
            class="md-card__meta-info md-shimmer__item md-shimmer__item--paragraph"
          ></div>
        </div>
        <div class="md-flex-grow-1"></div>
        <button class="md-icon-button">
          <i class="md-icon-button__icon material-icons md-shimmer__item"
            >favorite</i
          >
        </button>
      </div>
    </section>
    <section
      class="md-card__supporting-text md-shimmer__item md-shimmer__item--paragraph md-ml-2"
    ></section>
    <div
      class="md-card__supporting-text md-d-flex md-align-items-center md-pt-0"
    >
      <div
        class="md-review md-review--small-icon md-shimmer__item md-shimmer__item--paragraph"
      ></div>
      <div class="md-flex-grow-1"></div>
    </div>
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
export default {
  name: 'MovieCardShimmer',
  props: {}
}
</script>
