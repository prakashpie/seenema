// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  /.*\.(mp4|webm)/,
  workbox.strategies.cacheFirst({
    plugins: [new workbox.rangeRequests.Plugin()]
  }),
  'GET'
)
