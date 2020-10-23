<template>
  <div>
    <Container>
      <div :class="$style.content">
        <h1>An error has occurred</h1>
        <p>Please refresh the page</p>

        <ButtonBase :text="'Reload page'" @click.native="reloadPage" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  methods: {
    reloadPage () {
      window.location.reload(true)
    }
  },

  head: {
    title: '| Error'
  }
}
</script>

<style module lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 128px);
  height: 4em;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: $color_base_500;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: $color_base_300;
    margin: 24px 0 40px;
  }
}

[data-theme="dark"] {
  .content{
    h1 {
      color: $color_base_0;
    }

    p {
      color: $color_base_200;
    }
  }
}

@media (max-width: 767px) {
  .content {
    h1 {
      font-size: 24px;
    }

    p {
      margin: 16px 0 32px;
    }
  }
}
</style>
