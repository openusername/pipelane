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
  middleware: ['fetchVehicles']
}
</script>
