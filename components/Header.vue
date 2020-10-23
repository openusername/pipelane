<template>
  <header :class="$style.header">
    <div :class="$style.header__item">
      <nuxt-link to="/" :class="$style.header__logo" />
      <div :class="$style.header__desc">
        World's first affordable airsharing
      </div>
    </div>
    <div :class="$style.header__item">
      <!-- Mode icon -->
      <div :class="[$style.header__icon, $style.header__icon_mode]" @click="switchTheme">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path v-if="theme === 'dark'" d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" />
          <path v-else d="M10 7C9.9998 8.39064 10.4138 9.74983 11.1892 10.9042C11.9646 12.0586 13.0663 12.9559 14.3538 13.4816C15.6412 14.0073 17.0561 14.1376 18.4179 13.8559C19.7797 13.5742 21.0268 12.8933 22 11.9V12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2H12.1C11.434 2.65113 10.9051 3.42896 10.5445 4.28768C10.1838 5.1464 9.99869 6.06862 10 7ZM4 12C3.99927 13.785 4.59553 15.5189 5.69389 16.926C6.79226 18.333 8.32963 19.3323 10.0614 19.7648C11.7932 20.1974 13.6199 20.0383 15.2508 19.313C16.8818 18.5876 18.2233 17.3377 19.062 15.762C17.5694 16.1136 16.0118 16.0781 14.5368 15.6587C13.0619 15.2394 11.7185 14.4501 10.6342 13.3658C9.54992 12.2815 8.76065 10.9381 8.34128 9.46318C7.92192 7.98821 7.88636 6.43056 8.238 4.938C6.95758 5.62014 5.88678 6.63766 5.14026 7.88164C4.39373 9.12562 3.99958 10.5492 4 12Z" />
        </svg>
      </div>
      <!-- Chat icon -->
      <div :class="[$style.header__icon, $style.header__icon_chat]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" />
        </svg>
      </div>
      <!-- Notifications icon -->
      <div :class="[$style.header__icon, $style.header__icon_notif]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="4" r="3" fill="#F84AB3" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9994 10.9292C20.9998 10.9631 21 10.997 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2C12.4291 2 12.8511 2.03013 13.2642 2.08841C13.0921 2.69603 13 3.33726 13 4C13 4.02378 13.0001 4.04753 13.0004 4.07126C12.6736 4.0243 12.3396 4 12 4C8.134 4 5 7.148 5 11.031V18H19V11.031C19 10.9969 18.9998 10.9629 18.9993 10.929C19.3261 10.9758 19.6602 11 20 11C20.3393 11 20.673 10.9759 20.9994 10.9292ZM13.7678 22.7678C14.2366 22.2989 14.5 21.663 14.5 21H9.5C9.5 21.663 9.76339 22.2989 10.2322 22.7678C10.7011 23.2366 11.337 23.5 12 23.5C12.663 23.5 13.2989 23.2366 13.7678 22.7678Z" />
        </svg>
      </div>
      <div :class="$style.header__user">
        <div :class="$style.header__user_name">
          Bessie Cooper
        </div>
        <div :class="$style.header__user_avatar" role="img" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    theme () {
      return this.$store.getters['theme/getTheme']
    }
  },
  methods: {
    switchTheme () {
      this.$store.dispatch('theme/switchTheme')
    }
  }
}
</script>

<style module lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 16px;
  color: $color_base_300;

  &__item {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__logo {
    display: inline-block;
    background-image: url('/svg/Logo_light.svg');
    min-width: 171px;
    width: 171px;
    height: 48px;
    transition: all .2s;
  }

  &__desc {
    margin: 0 16px 0 65px;
    overflow: hidden;
  }

  &__icon {
    position: relative;
    min-width: 24px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    @include user-select(none);

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: $color_base_200;
        transition: all .2s;
      }
    }

    &:hover {
      svg {
        path {
          fill: $color_base_400;
        }
      }
      &::after {
        color: $color_base_400;
      }
    }

    &:active {
      svg {
        path {
          transition: all 0s;
          fill: $color_base_600;
        }
      }
      &::after {
        transition: all 0s;
        color: $color_base_600;
      }
    }

    &_mode {
      margin-right: 203px;

      &::after {
        position: absolute;
        padding-left: 16px;
        left: 24px;
        color: $color_base_200;
        content: 'Night mod';
        white-space: nowrap;
        transition: all .2s;
      }
    }
    &_chat {
      margin-right: 24px;
    }
    &_notif {
      margin-right: 56px;
    }
  }

  &__user {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    min-width: 180px;
    @include user-select(none);

    &_name {
      margin-right: 16px;
      font-weight: 700;
      color: $color_base_500;

      &:hover {
        color: $color_main_400;
      }
    }

    &_avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-image: url('/img/avatar.png');
      background-size: cover;
    }
  }
}

/* Dark theme */
[data-theme="dark"] {
  .header {
    color: $color_base_200;

    &__logo {
      background-image: url('/svg/Logo_dark.svg');
    }

    &__user {
      &_name {
        color: $color_base_0;
        &:hover {
          color: $color_base_100;
        }
      }
    }

    &__icon {
      &:hover {
        svg {
          path {
            fill: $color_base_100;
          }
        }
        &::after {
          color: $color_base_100;
        }
      }

      &:active {
        svg {
          path {
            transition: all 0s;
            fill: $color_base_0;
          }
        }
        &::after {
          transition: all 0s;
          color: $color_base_0;
        }
      }

      &_mode {
        &::after {
          content: 'Day mod';
        }
      }
    }
  }
}

@media (max-width: 1279.98px) {
  .header__icon_mode {
    margin: 24px;
    &::after {
      display: none;
    }
  }
}

@media (max-width: 1024px) {
  .header {
    &__desc {
      display: none;
    }
  }
}

@media (max-width: 767.98px) {
  .header {
    padding: 20px;

    &__user {
      justify-content: flex-end;
      min-width: auto;
      &_name {
        display: none;
      }

      &_avatar {
        width: 40px;
        height: 40px;
      }
    }

    &__logo {
      background-size: cover;
      width: 142px;
      min-width: 142px;
      height: 39px;
    }

    &__icon {
      &_mode {
        margin: 0 18px 0 10px;
      }
      &_chat {
        margin-right: 18px;
      }
      &_notif {
        margin-right: 28px;
      }
    }
  }
}

@media (max-width: 375px) {
  .header {
    padding: 12px 16px;
    &__logo {
      width: 113px;
      min-width: 113px;
      height: 31px;
    }

    &__icon {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin: 0 16px 0 0;
    }

    &__user {
      margin-left: 8px;
      &_avatar {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>
