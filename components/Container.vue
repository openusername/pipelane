<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 56px 4.4%;
  border-radius: 48px;
  background: $color_base_50;
  min-height: calc(100vh - 128px);
  margin-top: 40px;
  transition: all .2s;
}

/* Dark theme */
[data-theme="dark"] {
  .container {
    background: $color_base_600;
  }
}

@media (max-width: 767.98px) {
  .container {
    border-radius: 32px;
    margin-top: 12px;
    padding: 36px 4.4%;
  }
}

@media (max-width: 375px) {
  .container {
    margin-top: 8px;
    border-radius: 24px;
    padding: 24px 4.4%;
  }
}
</style>
