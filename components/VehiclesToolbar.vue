<template>
  <section :class="$style.toolbar">
    <div :class="$style.toolbar__choice">
      Rent
      <div :class="$style.toolbar__choice_select">
        {{ curentCategory }}
        <select v-model="selectedCategory">
          <option
            v-for="category in listCategories"
            :key="category"
            :selected="category === curentCategory"
          >
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <div :class="$style.toolbar__add" role="button" @click="openAddVehicle">
      Add new
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      curentCategory: 'whatever',
      selectedCategory: 'whatever'
    }
  },
  computed: {
    vehicles: {
      get () { return this.$store.getters['vehicles/vehicles'] },
      set (value) { this.$store.commit('vehicles/setVehicles', value) }
    },

    listCategories: {
      get () { return this.$store.getters['vehicles/listCategories'] },
      set (listCategories) { this.$store.commit('vehicles/setListCategories', listCategories) }
    },

    categoryName () {
      return this.$route.params.category
    }
  },
  watch: {
    selectedCategory () {
      const categotyName = this.selectedCategory.toLowerCase().trim()
      const link = categotyName === 'whatever' ? '/' : `/${categotyName}`
      this.$router.push(link)
    }
  },
  mounted () {
    if (this.categoryName) {
      this.curentCategory = this.selectedCategory = this.categoryName
    }
  },
  methods: {
    openAddVehicle () {
      this.$router.push({ query: { poppup: 'add_vehicle' } })
    }
  }
}
</script>

<style module lang="scss">
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @include user-select(none);

  &__choice {
    display: inline-block;
    position: relative;
    font-size: 40px;
    line-height: 120%;
    color: $color_base_500;
    font-weight: 700;

    &_select {
      display: inline-block;
      position: relative;
      color: $color_main_400;
      padding-right: calc(24px + 12px);
      transition: all .2s;

      &:hover {
        color: $color_main_500;
        &::after {
          color: $color_main_500;
        }
      }

      &::after {
        position: absolute;
        top: 12px;
        right: 0;
        content: '';
        width: 24px;
        height: 24px;
        background-image: url('/svg/select_arrow.svg');
        background-size: cover;
        z-index: 1;
      }

      select {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: 2;
        font-size: 18px;

        &:focus { opacity: 1; }
      }
    }
  }

  &__add {
    position: relative;
    padding-right: 20px;
    margin-right: 48px;
    color: $color_main_400;
    font-size: 20px;
    line-height: 48px;
    font-weight: 700;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all .2s;

    &::after {
      position: absolute;
      top: 0;
      right: -48px;
      content: '';
      width: 48px;
      height: 48px;
      background: $color_main_400;
      background-image: url('/svg/add_new_btn.svg');
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 16px;
      transition: all .15s;
    }

    &:hover {
      color: $color_main_500;
      &::after {
        background-color: $color_main_500;
        transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
      }
    }
    &:active {
      color: $color_main_300;
      transition: all .05s;
      &::after {
        transition: all .1s;
        background-color: $color_main_400;
        transform: scale(0.9) rotate(90deg);
        -ms-transform: scale(0.9) rotate(90deg);
        -webkit-transform: scale(0.9) rotate(90deg);
      }
    }
  }
}

/* Dark theme */
[data-theme="dark"] {
  .toolbar__choice {
    color: $color_base_0;
  }
}

@media (max-width: 767.98px) {
  .toolbar {
    &__choice {
      font-size: 30px;
      &_select {
        padding-right: calc(20px + 8px);

        &::after {
          width: 20px;
          height: 20px;
          top: 10px;
        }
      }
    }

    &__add {
      padding-right: 16px;
      margin-left: 12px;
      margin-right: 32px;
      color: $color_main_400;
      font-size: 18px;
      line-height: 36px;

      &::after {
        position: absolute;
        top: 0;
        right: -32px;
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 12px;
        background-size: 38%;
      }
    }
  }
}

@media (max-width: 375px) {
  .toolbar {
    &__choice {
      font-size: 24px;
      &_select {
        padding-right: calc(16px + 4px);

        &::after {
          width: 16px;
          height: 16px;
          top: 8px;
        }
      }
    }

    &__add {
      padding-right: 12px;
      margin-left: 12px;
      margin-right: 32px;
      color: $color_main_400;
      font-size: 16px;
      line-height: 32px;

      &::after {
        position: absolute;
        top: 0;
        right: -32px;
        content: '';
        width: 32px;
        height: 32px;
        border-radius: 8px;
      }
    }
  }
}
</style>
