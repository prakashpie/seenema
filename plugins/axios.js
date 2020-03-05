export default function({ $axios, store }) {
  $axios.onRequest(config => {
    config.headers['Content-Type'] = 'application/json'
  })
  $axios.interceptors.response.use(
    response => {
      return response
    },
    function(error) {
      return Promise.reject(error.response)
    }
  )
}
