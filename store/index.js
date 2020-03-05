import Vuex from 'vuex'
import core from './core'

const store = () =>
  new Vuex.Store({
    modules: {
      core
    }
  })

export default store
