<template>
  <div :class="$style.poppup">
    <h1>Add new vehicle</h1>
    <button :class="$style.poppup__close" @click="close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" />
      </svg>
    </button>
    <form action="" @submit.prevent="submitHandler">
      <!-- Image -->
      <div :class="$style.poppup__imgInput">
        <div :class="$style.poppup__imgInput_inner">
          <div ref="img_preview" :class="$style.poppup__imgInput_preview" />
        </div>
        <label title="Add image">
          <input
            ref="image_input"
            type="file"
            name="file"
            accept="image/x-png,image/gif,image/jpeg"
            :class="$style.poppup__imgInput_input"
            @change="onFileChange"
          >
        </label>
      </div>
      <!-- Name -->
      <div :class="$style.poppup__wrapTextInput">
        <input
          v-model.trim="name"
          type="text"
          placeholder="Name"
          maxlength="30"
          :class="{[$style.invalid]: ($v.name.$dirty && !$v.name.required)}"
        >
        <small v-if="$v.name.$dirty && !$v.name.required">
          The name field is required
        </small>
      </div>
      <!-- Description -->
      <div :class="$style.poppup__wrapTextInput">
        <input
          v-model.trim="description"
          type="text"
          placeholder="Description"
          maxlength="150"
          :class="{[$style.invalid]: ($v.description.$dirty && !$v.description.required)}"
        >
        <small v-if="$v.description.$dirty && !$v.description.required">
          The description field is required
        </small>
        <small v-else-if="$v.description.$dirty && !$v.description.minLength">
          The description must be at least 5 characters long
        </small>
      </div>
      <!-- Rent price -->
      <div :class="$style.poppup__wrapTextInput">
        <input
          id="rent"
          v-model="price"
          type="number"
          placeholder="Rent price"
          min="0"
          maxlength="15"
          :class="{[$style.invalid]: ($v.price.$dirty && !$v.price.required)}"
        >
        <label for="rent">$/h</label>
        <small v-if="$v.price.$dirty && !$v.price.required">
          The price field is required
        </small>
      </div>
      <div v-if="uploading" :class="$style.poppup__loading" />
      <input
        v-else
        type="submit"
        value="compete"
        :class="$style.poppup__submit"
      >
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      description: '',
      price: '',
      uploading: false
    }
  },

  validations: {
    name: { required },
    description: { required, minLength: minLength(5) },
    price: { required }
  },

  methods: {
    close () {
      const query = Object.assign({}, this.$route.query)
      delete query.poppup
      this.$router.replace({ query })
    },

    onFileChange (e) {
      const reader = new FileReader()
      if (e.target.files && e.target.files[0]) {
        reader.addEventListener('load', (e) => {
          this.$refs.img_preview.style.backgroundImage = `url('${e.target.result}')`
        })
      }
      reader.readAsDataURL(e.target.files[0])
    },

    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const data = {
        image: this.$refs.image_input.files[0],
        name: this.name.toUpperCase(),
        description: this.description,
        price: this.price
      }

      this.uploading = true
      const res = await this.$store.dispatch('vehicles/uploadVehicle', data)
      if (res) {
        this.$router.push('/custom')
      }

      this.uploading = false
    }
  }
}
</script>

<style module lang="scss">
.poppup {
  position: relative;
  display: inline-block;
  margin-left: calc(100% - 600px);
  width: 600px;
  max-width: 100%;
  min-height: 100vh;
  background: $color_base_0;
  border-radius: 48px 0 0 48px;
  padding: 64px 72px;
  text-align: left;

  &__close {
    position: absolute;
    top: 64px;
    right: 72px;
    padding: 12px;
    background: $color_base_50;
    outline: none;
    border: none;
    border-radius: 16px;
    line-height: 0;
    transition: all .3s;
    cursor: pointer;

    &:hover {
      background: $color_base_100;
      transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    }

    &:active {
      transition: all .1s;
      background: $color_base_200;
    }

    svg {
      path {
        fill: $color_base_500;
      }
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: $color_base_500;
    padding-right: 56px;
  }

  &__imgInput {
    position: relative;
    width: 100%;
    background: $color_base_50;
    border-radius: 24px;
    margin-top: 40px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      background-image: url('/svg/add_image.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-color: $color_base_0;
      border-radius: 16px;
      z-index: 0;
    }

    &_inner {
      position: relative;
      padding-top: 76%;
      height: 0;
      border: none;
    }

    &_preview {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-size: cover;
      background-position: center;
      z-index: 1;
    }

    input {
      opacity: 0;
      visibility: hidden;
      outline: none;
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      cursor: pointer;
    }
  }

  &__wrapTextInput {
    position: relative;
    width: 100%;
    margin-top: 24px;

    input {
      width: 100%;
      padding: 20px 23px;
      line-height: 14px;
      font-weight: 300;
      font-size: 16px;
      color: $color_base_300;
      background: $color_base_50;
      border: 1px solid $color_base_50;
      border-radius: 12px;
      outline: none;

      &:focus {
        border: 1px solid $color_main_200;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &.invalid {
        border: 1px solid $color_secondary_600;
      }
    }

    label {
      position: absolute;
      top: 0;
      right: 21px;
      font-size: 16px;
      padding: 21px 0;
      color: $color_base_200;
      @include user-select(none);
    }

      small {
        color: $color_secondary_600;
        font-weight: 700;
      }
  }

  &__submit {
    width: 100%;
    margin-top: 40px;
    padding: 21px 0;
    text-align: center;
    background: $color_main_400;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: $color_base_0;
    outline: none;
    transition: all .3s;
    cursor: pointer;
    @include user-select(none);

    &:hover {
      background: $color_main_500;
    }

    &:active {
      transition: all .1s;
      background: $color_main_400;
    }
  }

  &__loading {
    width: 100%;
    height: 20px;
    margin-top: 20px;
    background-image: url('/svg/loading.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
}

/* Dark theme */
[data-theme="dark"] {
  .poppup {
    background: $color_base_500;

    h1 {
      color: $color_base_0;
    }

    &__imgInput  {
      background: $color_base_600;

      &::after {
        background-color: $color_base_500;
      }
    }

    &__wrapTextInput {
      input {
        background: $color_base_600;
        border: 1px solid $color_base_600;
        color: $color_base_200;

        &:focus {
          border: 1px solid $color_main_300;
        }

        &.invalid {
          border: 1px solid $color_secondary_600;
        }
      }
    }

    &__close {
      background: $color_base_600;
      svg {
        path {
          fill: $color_base_0;
        }
      }
      &:hover {
        background: $color_base_700;
      }
      &:active {
        transition: all .1s;
        background: $color_base_600;
      }
    }

    &__wrapTextInput {
      position: relative;
      label {
        color: $color_base_300;
      }
    }
  }
}

@media (max-width: 767.98px) {
  .poppup {
    width: 100%;
    min-height: 80vh;
    margin: 20vh 0 0 0;
    padding: 32px;
    border-radius: 30px 30px 0 0;

    h1 {
      font-size: 32px;
    }

    &__close {
      padding: 9px;
      top: 32px;
      right: 32px;
      border-radius: 10px;
       svg {
        width: 22px;
        height: 22px;
      }
    }

    &__imgInput {
      margin-top: 30px;
    }

    &__wrapTextInput {
      margin-top: 20px;

      input {
        font-size: 14px;
        padding: 19px;
        border-radius: 12px;
      }

      label {
        right: 20px;
        font-size: 14px;
        padding: 20px 0;
      }
    }

    &__submit {
      margin-top: 36px;
      padding: 20px 0;
      font-size: 14px;
    }
  }
}

@media (max-width: 375px) {
  .poppup {
    padding: 24px 16px 32px 16px;
    border-radius: 24px 24px 0 0;

    h1 {
      font-size: 24px;
    }

    &__close {
      padding: 6px;
      top: 24px;
      right: 16px;
      border-radius: 8px;
      svg {
        width: 20px;
        height: 20px;
      }
    }

    &__imgInput {
      margin-top: 24px;
    }

    &__wrapTextInput {
      margin-top: 16px;

      input {
        font-size: 12px;
      }

      label {
        right: 20px;
        font-size: 12px;
        padding: 20px 0;
      }
    }

    &__submit {
      margin-top: 24px;
    }
  }
}
</style>
