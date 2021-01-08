export const state = () => ({
  menu: {},
  showRender: false,
  onMobile: false,
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_ERROR(state, error) {
    state.menu = error
  },
  SET_RENDER_OFF(state) {
    state.showRender = false
  },
  SET_RENDER_ON(state) {
    state.showRender = true
  },
  ON_MOBILE(state) {
    state.onMobile = true
  },
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (await $prismic.api.getSingle('menu')).data

      commit('SET_MENU', menu)
    } catch (e) {
      const error = 'Error loading menu items'

      commit('SET_ERROR', error)
    }
  },
}
