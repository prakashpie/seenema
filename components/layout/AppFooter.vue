<template>
  <footer class="md-footer">
    <div class="md-footer__section--utility md-footer__section md-pt-2 md-pb-2">
      <div
        class="md-container md-container--box md-container--gutter md-container--gutter-24-md"
      >
        <div class="md-row">
          <div
            class="md-col md-col--12 md-layout md-align md-align--start-center"
          >
            <div
              style="color: var(--color-app-text-secondary);"
              class="md-typography-body-1"
            >
              © 2019 Seenema
            </div>
            <div class="md-d-flex md-flex-grow-1" />
            <div class="md-footer__link-list--row md-footer__link-list">
              <nuxt-link
                to="/privacy"
                class="md-footer__link md-typography-caption"
                >Privacy policy
              </nuxt-link>
              <nuxt-link
                to="/terms"
                class="md-footer__link md-typography-caption"
                >Terms & conditions
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
