<template>
  <div :class="$style.app" :data-theme="mode">
    <div :class="$style.app__inner">
      <Header />
      <Nuxt />
    </div>
    <Poppups />
  </div>
</template>

<script>

export default {
  computed: {
    mode () {
      return this.$store.getters['theme/getTheme']
    }
  },
  mounted () {
    const theme = localStorage.getItem('theme') || 'light'
    this.$store.commit('theme/setTheme', theme)
  }
}
</script>

<style module lang="scss">
@font-face {
  font-family: 'Codec Pro';
  src: local('Codec Pro News'), local('Codec-Pro-News'),
      url('/fonts/CodecPro-News/CodecPro-News.woff2') format('woff2'),
      url('/fonts/CodecPro-News/CodecPro-News.woff') format('woff'),
      url('/fonts/CodecPro-News/CodecPro-News.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: Codec Pro, Roboto, Arial;
  font-size: 17px;
  word-spacing: 1px;
  line-height: 1;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.app {
  display: block;
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: $color_base_0;
  text-align: center;
  transition: all .2s;

  &__inner {
    text-align: left;
    margin: 48px auto;
    display: inline-block;
    width: calc(100% - 128px);
  }
}

/* Dark theme */
[data-theme="dark"] {
  background: $color_base_500;
}

@media (min-width: 1920px) {
  .app__inner {
    width: calc(1920px - 128px);
  }
}

@media (min-width: 768px) and (max-width: 1023.98px) {
  .app__inner {
    width: calc(100% - 64px);
  }
}

@media (max-width: 767.98px) {
  .app__inner {
    width: 100%;
    margin: 0 0 20px 0;
  }
}

@media (max-width: 375px) {
  .app__inner {
    width: 100%;
  }
}
</style>
