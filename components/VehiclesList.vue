<template>
  <section>
    <ul :class="$style.categories">
      <!-- Card start -->
      <li v-for="vehicle in vehicles" :key="vehicle.id" :class="$style.categories__card">
        <n-link :to="`/${vehicle.type}/${vehicle.id}`" :class="$style.categories__card_imgwrap">
          <div
            role="img"
            :class="$style.categories__card_preview"
            :style="`background-image: url('${vehicle.preview}')`"
          />
        </n-link>

        <div :class="$style.categories__card_about">
          <n-link
            :to="`/${vehicle.type}/${vehicle.id}`"
            :class="$style.categories__card_title"
          >
            {{ vehicle.name }}
          </n-link>
          <p :class="$style.categories__card_desc">
            {{ vehicle.description }}
          </p>
          <p :class="$style.categories__card_cost">
            {{ vehicle.rent }} $/h
          </p>
        </div>
      </li>
      <!--Card end -->
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    vehicles () {
      const category = this.$route.params.category
      if (!category || category === 'whatever') {
        return this.$store.getters['vehicles/vehicles']
      }
      return this.$store.getters['vehicles/vehicles'].filter(v => v.type === category)
    }
  }
}
</script>

<style module lang="scss">
section {
  width: 100%;
}
.categories {
  display: flex;
  width: calc(100% + 32px);
  justify-content: space-between;
  margin: 8px -16px;
  display: -moz-webkit-flex;
  display: -webkit-flex;
  display: -ms-box;
  -ms-flex-direction: row;
  -moz-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;

  &__card {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(33.3% - 32px);
    min-width: 325px;
    margin: 32px 16px 0;
    padding: 24px 32px;
    background: $color_base_0;
    border-radius: 32px;
    list-style: none;
    overflow: hidden;
    transition: all .15s;

    &:hover {
      -webkit-box-shadow: 1px 1px 18px 0px rgba(86, 108, 126, 0.2);
      -moz-box-shadow: 1px 1px 18px 0px rgba(86, 108, 126, 0.2);
      box-shadow: 1px 1px 18px 0px rgba(86, 108, 126, 0.2);
    }

    &_imgwrap {
      min-width: 88px;
      width: 88px;
      height: 88px;
      overflow: hidden;
      border-radius: 24px;
    }

    &_preview {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-color: $color_base_50;
      transition: all .28s;

      &:hover {
        transform: scale(1.04);
        -webkit-transform: scale(1.04);
        -moz-transform: scale(1.04);
      }
    }

    &_about {
      display: inline-flex;
      width: calc(100% - 88px);
      flex-direction: column;
      margin: 16px 0 0 24px;
    }

    &_title {
      color: $color_base_500;
      font-size: 16px;
      font-weight: 700;
      transition: all .2s;
      @include user-select(none);

      &:hover {
        color: $color_base_300;
      }
    }

    &_desc {
      margin: 12px 0 16px;
      height: 36px;
      font-size: 12px;
      font-weight: 300;
      line-height: 18px;
      color: $color_base_300;
    }

    &_cost {
      font-size: 14px;
      line-height: 20px;
      color: $color_secondary_400;
      font-weight: 700;
    }
  }
}

/* Dark theme */
[data-theme="dark"] {
  .categories__card {
    background: $color_base_500;

    &_title {
      color: $color_base_0;
      &:hover {
        color: $color_base_100;
      }
    }

    &_desc {
      color: $color_base_200;
    }

    &:hover {
    -webkit-box-shadow: 1px 1px 18px 0px rgba(196, 204, 210, 0.2);
    -moz-box-shadow: 1px 1px 18px 0px rgba(196, 204, 210, 0.2);
    box-shadow: 1px 1px 18px 0px rgba(196, 204, 210, 0.2);
    }
  }
}

@media (min-width: 1024px) and (max-width: 1279.98px) {
  .categories__card {
    width: 390px;
  }
}
@media (min-width: 768px) and  (max-width: 1023.98px) {
  .categories__card {
    width: calc(50% - 32px);
    min-width: 300px;
  }
}

@media (min-width: 375px) and  (max-width: 767.98px) {
  .categories__card {
    width: calc(100% - 32px);
    min-width: 300px;
    margin-top: 16px;
    border-radius: 28px;
  }
}

@media (max-width: 375px) {
  .categories{
    margin-top: 12px;
    &__card {
      width: calc(100% - 32px);
      margin-top: 12px;
      padding: 20px;
      border-radius: 24px;
      min-width: 280px;

      &_about {
        margin-left: 20px;
      }
    }
  }
}
</style>
