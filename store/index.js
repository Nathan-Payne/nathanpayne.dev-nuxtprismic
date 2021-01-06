export const state = () => ({
  menu: {},
  showRender: false,
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_ERROR(state, error) {
    state.menu = error
  },
  TOGGLE_RENDER(state) {
    state.showRender = !state.showRender
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
