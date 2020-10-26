import { getVehicles } from '~/assets/api/request'

export const state = () => ({
  vehicles: [],
  listCategories: []
})

export const mutations = {
  setVehicles (state, vehicles) {
    state.vehicles = vehicles
  },

  setListCategories (state, list) {
    state.listCategories = list.sort()
  },

  addCustomVehicle (state, data) {
    const id = `${new Date().getTime()}`
    state.vehicles.push({
      id,
      name: data.name,
      type: 'custom',
      description: data.description,
      specifications_text: 'Consectetur esse ex et sunt. Excepteur irure fugiat adipisicing ipsum reprehenderit laboris aliqua Lorem minim nostrud mollit reprehenderit. Voluptate fugiat pariatur pariatur eu incididunt. Laborum reprehenderit sit laboris magna dolore fugiat officia consectetur officia tempor eiusmod. Exercitation Lorem laboris amet ipsum. Dolor exercitation aute incididunt labore cupidatat eu ipsum laborum occaecat sit Lorem. Aliqua consequat labore in eiusmod Lorem cillum irure culpa nisi. Mollit ad ad incididunt fugiat dolore officia commodo occaecat labore. Ut elit consectetur consectetur dolore tempor ad culpa consequat. Qui dolor cillum quis exercitation eiusmod ad nulla aute.',
      team_text: 'Ex elit qui ullamco quis ex consectetur nulla aliqua adipisicing amet tempor duis. Incididunt cillum reprehenderit dolore enim ea. Minim duis ipsum est ut id sint voluptate. Quis ad laborum amet fugiat nulla deserunt non ad adipisicing excepteur ullamco sint quis. Elit qui sit irure proident quis Lorem et eiusmod do quis.',
      term_text: 'Ut consectetur dolor labore non velit voluptate sint enim cillum ad labore. Adipisicing minim sunt labore sit anim culpa cillum laboris proident dolor do sint. In esse cupidatat id sit eiusmod culpa quis. In ullamco pariatur sit in excepteur ipsum incididunt reprehenderit aliqua minim. Deserunt cillum consectetur ut velit fugiat cupidatat elit ullamco adipisicing pariatur. Aute qui qui magna culpa proident ad labore qui est. Amet velit nisi ea eiusmod reprehenderit cillum aliqua do ut. Consectetur elit nostrud nulla fugiat laborum aliqua sit. Laboris magna consectetur qui ex. Sunt irure magna quis amet dolore.',
      rent: data.price,
      preview: `https://loremflickr.com/160/160/custom?random=${id}`,
      image: 'https://loremflickr.com/900/900/custom'
    })
  }
}

export const actions = {
  async fetchVehicles ({ dispatch, commit }) {
    return await getVehicles()
      .then((vehicles) => {
        commit('setVehicles', vehicles)
        dispatch('updateListCategories')
        return Promise.resolve(vehicles)
      })
      .catch(e => Promise.reject(e))
  },

  updateListCategories ({ state, commit }) {
    const newList = [...new Set(state.vehicles.map(v => v.type)), 'whatever']
    commit('setListCategories', newList)
  },

  async uploadVehicle ({ dispatch, commit }, data) {
    /* Emulate request */
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve(data)
          : reject(new Error({ message: 'Some server error' }))
      }, 1000)
    })
      .then((data) => {
        commit('addCustomVehicle', data)
        dispatch('updateListCategories')
        return Promise.resolve(data)
      })
      .catch(e => Promise.reject(e))
  }
}

export const getters = {
  vehicles: state => state.vehicles,
  listCategories: state => state.listCategories
}
