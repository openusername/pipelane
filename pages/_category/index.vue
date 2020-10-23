<template>
  <div>
    <Container>
      <VehiclesToolbar />
      <VehiclesList />
    </Container>
  </div>
</template>

<script>
export default {
  middleware: ['fetchVehicles'],
  validate ({ store, params }) {
    return store.getters['vehicles/vehicles']
      .find(v => v.type === params.category)
  },
  asyncData ({ params }) {
    const currentCategory = params.category
    return {
      currentCategory
    }
  },
  head () {
    return {
      title: `| ${this.currentCategory}`
    }
  }
}
</script>
