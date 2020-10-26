export default function ({ store, error }) {
  if (store.getters['vehicles/vehicles'].length === 0) {
    store.dispatch('vehicles/fetchVehicles')
      .catch((e) => { error(e) })
  }
}
