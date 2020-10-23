<template>
  <div>
    <button :class="$style.button">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style module lang="scss">
.button {
  padding: 17px 32px;
  border-radius: 12px;
  background: $color_main_400;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: $color_base_0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .2s;
  @include user-select(none);

  &:hover {
    background: $color_main_500;
  }
  &:active {
    transition: all .1s;
    transform: scale(0.95);
    -ms-transform: scale(0.95);
    -webkit-transform: scale(0.95);
  }
}

@media (max-width: 414px) {
  .button {
    font-size: 14px;
    padding: 16px 24px;
  }
}
</style>
