import Vue from 'vue'

Vue.filter('truncate', function(value, n = 100) {
  if (!value) return ''
  value = value.toString()
  return value.length > n ? value.substring(0, n) + '...' : value
})
