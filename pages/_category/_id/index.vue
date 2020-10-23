<template>
  <div :class="$style.specifications">
    <div :class="$style.specifications__text">
      {{ info.specifications_text }}
    </div>

    <div :class="$style.features">
      <h2>Features</h2>
      <ul :class="$style.features__list">
        <!--card start-->
        <li :class="$style.features__card">
          <div :class="[$style.icon, $style.icon_1]" />

          <div :class="$style.features__card_content">
            <h3>A challenge for a true champion</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </li>
        <!--card end-->

        <!--card start-->
        <li :class="$style.features__card">
          <div :class="[$style.icon, $style.icon_2]" />

          <div :class="$style.features__card_content">
            <h3>Pilot's sweaty hands</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </li>
        <!--card end-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style module lang="scss">
.specifications {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: $color_base_300;
}

.features {
  h2 {
    margin: 32px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    color: $color_base_500;
  }

  &__card {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    list-style: none;

    .icon{
      width: 80px;
      min-width: 80px;
      height: 96px;
      background-color: $color_base_50;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 16px;

      &_1 {
        background-image:url('/svg/features/icon_1.svg')
      }
      &_2 {
        background-image:url('/svg/features/icon_2.svg')
      }
    }

    &_content {
      width: calc(100% - 24px);
      margin-left: 24px;

      h3 {
        font-weight: bold;
        font-size: 16px;
        line-height: 152%;
        color: $color_base_500;
        margin: 4px 0 8px;
      }
    }
  }
}

/* Dark theme */
[data-theme="dark"] {
  .specifications__text {
    color: $color_base_200;
  }

  .features {
    h2 {
      color: $color_base_0;
    }

    &__card {
      &_content {
        h3 {
          color: $color_base_0;
        }
        p {
          color: $color_base_200;
        }
      }
    }

    .icon {
      background-color: $color_base_600;
      &_1 {
        background-image:url('/svg/features/icon_1_dark.svg')
      }
      &_2 {
        background-image:url('/svg/features/icon_2_dark.svg')
      }
    }

  }
}

@media (max-width: 375px) {
  .features {
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }

    &__card {
      margin-bottom: 12px;
      &_content {
        margin-left: 16px;
      }
      .icon {
        width: 64px;
        min-width: 64px;
        height: 80px;
        background-size: 37%;
      }

      h3 {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
