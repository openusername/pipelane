export const state = () => ({
  theme: 'light'
})

export const mutations = {
  setTheme (state, theme) {
    state.theme = theme
  }
}

export const actions = {
  switchTheme ({ state, commit }) {
    const newMode = state.theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newMode)
    commit('setTheme', newMode)
  }
}

export const getters = {
  getTheme: state => state.theme
}
