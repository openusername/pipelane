<template>
  <div v-if="vehicle" :class="$style.container">
    <div :class="$style.img_ratio">
      <div :class="$style.img_ratio__inner">
        <div
          role="image"
          :class="$style.img_ratio_image"
          :style="`background-image: url('${vehicle.image}')`"
        />
      </div>
    </div>

    <div :class="$style.container__about">
      <h1>{{ vehicle.name }}</h1>
      <nav :class="$style.container__about_menu">
        <ul>
          <li>
            <n-link
              :to="`/${vehicle.type}/${vehicle.id}`"
              :exact-active-class="$style.active"
            >
              Specifications
            </n-link>
          </li>
          <li>
            <n-link
              :to="`/${vehicle.type}/${vehicle.id}/team`"
              :exact-active-class="$style.active"
            >
              Team
            </n-link>
          </li>
          <li>
            <n-link
              :to="`/${vehicle.type}/${vehicle.id}/rent_terms`"
              :exact-active-class="$style.active"
            >
              Rent terms
            </n-link>
          </li>
        </ul>
      </nav>

      <n-child :info="vehicle" />
      <div ref="rent_now" :class="$style.container__about_rent">
        <div :class="$style.rent_text">
          Rent for <span>{{ vehicle.rent }} $/h</span>
        </div>
        <ButtonBase :text="'Rent now'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['fetchVehicles'],

  validate ({ store, params }) {
    return store.getters['vehicles/vehicles']
      .find(v => v.id === params.id && v.type === params.category)
  },

  asyncData ({ store, params }) {
    const vehicle = store.getters['vehicles/vehicles'].find(v => v.id === params.id)
    return { vehicle }
  },

  data () {
    return {
      oldScroll: 0
    }
  },

  computed: {
    category () {
      return this.$route.params.category
    },
    id () {
      return this.$route.params.id
    },

    vehicles: {
      get () { return this.$store.getters['vehicles/vehicles'] },
      set (value) { this.$store.commit('vehicles/setVehicles', value) }
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScrollPage)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScrollPage)
  },

  methods: {
    onScrollPage () {
      if (this.oldScroll > window.pageYOffset + 2) {
        this.$refs.rent_now.classList.add(this.$style.container__about_rent_mod)
        this.oldScroll = window.pageYOffset
      } else if (this.oldScroll < window.pageYOffset - 2) {
        this.$refs.rent_now.classList.remove(this.$style.container__about_rent_mod)
        this.oldScroll = window.pageYOffset
      }
    }
  },

  head () {
    return {
      title: `| ${this.vehicle.name}`
    }
  }
}
</script>

<style module lang="scss">
.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;

  &__about {
    margin-left: 64px;
    width: calc(45% - 64px);

    h1 {
      margin-top: 56px;
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      color: $color_base_500;
    }
    nav {
      margin: 32px 0;
      @include user-select(none);

      a {
        color: $color_base_300;
        &:hover {
          color: $color_base_400;
        }
        &.active {
          color: $color_main_400;
          &:hover {
            color: $color_main_500;
          }
        }
      }

      ul {
        display: flex;
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;

        li {
          list-style: none;
        }

        li:not(:last-child) {
          margin-right: 32px;
        }

      }
    }

    &_rent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 45px;
      padding: 16px 32px;
      background: $color_base_50;
      border-radius: 16px;

      .rent_text {
        font-weight: bold;
        font-size: 20px;
        line-height: 140%;
        color: $color_base_500;
        margin-right: 15px;

        span {
          color: $color_secondary_400;
          white-space: nowrap;
        }
      }

      &_mod {
        position: relative;
      }
    }
  }
}

.img_ratio {
  width: 55%;

  &__inner {
    position: relative;
    height: 0;
    border: none;
    padding-top: 94%;
  }

  &_image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 24px;
    background-position: center;
    background-size: cover;
    background-color: $color_base_50;
  }
}

/* Dark theme */
[data-theme="dark"] {
  .container__about {
    h1 {
      color: $color_base_0;
    }
    nav {
      a {
        color: $color_base_200;
        &:hover {
          color: $color_base_100;
        }

        &.active {
          color: $color_main_400;
          &:hover {
            color: $color_base_300;
          }
        }
      }
    }

    &_rent {
      background: $color_base_600;
      .rent_text {
        color: $color_base_0;
      }
    }
  }
}

@media (max-width: 1023px) {
  [data-theme="dark"] {
    .container__about_rent_mod {
      -webkit-box-shadow: 0px -5px 26px 4px $color_base_500;
      -moz-box-shadow: 0px -5px 26px 4px $color_base_500;
      box-shadow: 0px -5px 26px 4px $color_base_500;
    }
  }
  .container {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    margin-top: 16px;

    &__about {
      margin: 0;
      width: 100%;
    }
    nav {
      margin: 28px 0 24px;
    }

    h1 {
      margin-top: 28px;
      font-size: 30px;
    }

    &__about_rent {
      padding: 12px 24px;

      &_mod {
        position: fixed;
        width: calc(100% - 32px);
        margin: 0 16px;
        bottom: 0px;
        right: 0;
        animation: showRent .5s ease-out;
        -moz-animation: showRent .5s ease-out;
        -webkit-animation: showRent .5s ease-out;
        -o-animation: showRent .5s ease-out;
        animation-fill-mode: forwards;
        animation-delay: .35s;
        opacity: 0;
        -webkit-box-shadow: 0px -5px 26px 4px $color_base_0;
        -moz-box-shadow: 0px -5px 26px 4px $color_base_0;
        box-shadow: 0px -5px 26px 4px $color_base_0;
      }

      .rent_text {
        font-size: 16px;
      }
    }
  }

  .img_ratio {
    width: 100%;
    &_image {
      border-radius: 20px;
    }
  }
}

@media (max-width: 375px) {
  .container {
    margin-top: 8px;
    padding: 0 16px;

    h1 {
      margin-top: 22px;
      font-size: 24px;
    }

    nav {
      margin: 16px 0 20px;
      ul {
        li:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }

  .img_ratio {
    width: 100%;
    &_image {
      border-radius: 16px;
    }
  }
}

@keyframes showRent {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    bottom: 32px;
  }
}
</style>
