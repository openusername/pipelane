export default async function ({ store, error }) {
  if (store.getters['vehicles/vehicles'].length === 0) {
    try {
      await store.dispatch('vehicles/fetchVehicles')
    } catch (e) {
      error(e)
    }
  }
}
