import Vue from 'vue'

const defaultCoreState = () => {
  return {
    snackbar: {
      actionText: '',
      message: ''
    },
    alert: {
      title: '',
      defaultTitle: 'Something went wrong or unable to connect',
      body: '',
      disableDismissive: false,
      show: false
    },
    appLoading: false,
    feedback: false,
    breadCrumbs: [],
    country: [],
    institution: [],
    favoriteItemList: [],
    history: [],
    libraryId: undefined
  }
}

export default {
  namespaced: true,

  state: defaultCoreState,

  mutations: {
    setData(state, obj) {
      state[obj.name] = obj.data
    },
    setSnackbar(state, obj) {
      for (const key in obj) {
        Vue.set(state.snackbar, key, obj[key])
      }
    },
    setAlert(state, obj) {
      for (const key in obj) {
        Vue.set(state.alert, key, obj[key])
      }
    },
    setAppLoading(state, val) {
      state.appLoading = val
    },
    setBreadCrumbs(state, val) {
      state.breadCrumbs = val
    },
    resetState(state) {
      Object.assign(state, defaultCoreState())
    }
  },

  actions: {
    getUpdatedFavoriteList({ commit }) {
      const favoriteItemList = JSON.parse(
        localStorage.getItem('favoriteItemList') || '[]'
      )
      commit('setData', { name: 'favoriteItemList', data: favoriteItemList })
    },
    toggleFav({ dispatch }, item) {
      const favoriteItemList = JSON.parse(
        localStorage.getItem('favoriteItemList') || '[]'
      )
      favoriteItemList.push(item)
      localStorage.setItem('favoriteItemList', JSON.stringify(favoriteItemList))
      dispatch('getUpdatedFavoriteList')
    }
  },

  getters: {
    snackbar(state) {
      return state.snackbar
    },
    alert(state) {
      return state.alert
    },
    appLoading(state) {
      return state.appLoading
    },
    breadCrumbs(state) {
      return state.breadCrumbs
    },
    feedback(state) {
      return state.feedback
    },
    favoriteItemList(state) {
      return state.favoriteItemList
    },
    getHistory(state) {
      return state.history
    }
  }
}
