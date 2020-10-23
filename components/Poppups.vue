<template>
  <transition
    name="fade"
    :enter-active-class="this.$style.fade_enter_active"
    :leave-active-class="this.$style.fade_leave_active"
    :enter-class="this.$style.fade_enter"
    :leave-to-class="this.$style.fade_leave_to"
    @after-enter="setOverflowY"
    @before-leave="setOverflowY"
  >
    <div v-show="poppup" ref="overlay" :class="$style.overlay">
      <transition
        name="move"
        :enter-active-class="this.$style.slide_enter_active"
        :leave-active-class="this.$style.slide_leave_active"
        :enter-class="this.$style.slide_enter"
        :leave-to-class="this.$style.slide_leave_to"
      >
        <AddVehicle v-if="poppup === 'add_vehicle'" />
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    poppup () {
      return this.$route.query.poppup
    }
  },
  mounted () {
    this.setOverflowY()
  },
  methods: {
    setOverflowY () {
      this.$refs.overlay.style.overflowY = this.poppup ? 'auto' : 'hidden'
      document.body.style.overflowY = this.poppup ? 'hidden' : 'auto'
    }
  }
}
</script>

<style module lang="scss">
.overlay {
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(52, 79, 106, 0.32);
  backdrop-filter: blur(32px);
  z-index: 999;
  overflow: hidden;
  transform: translateX(0);
}

.fade {
  &_enter_active,
  &_leave_active {
    transition: opacity .5s;
  }

  &_enter,
  &_leave_to {
    opacity: 0;
  }
}

.slide {
  &_enter_active {
    transition: transform .45s;
  }
  &_leave_active {
    transition: transform .3s;
  }

  &_enter,
  &_leave_to {
    transform: translateX(100%);
  }
}

@media (max-width: 767px) {
  .slide {
    &_enter,
    &_leave_to {
      transform: translateY(100%);
    }
  }
}
</style>
