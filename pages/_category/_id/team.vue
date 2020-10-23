<template>
  <div :class="$style.container">
    <p :class="$style.container__text_top">
      {{ info.team_text }}
    </p>
    <h2>Qualified specialists</h2>
    <ul :class="$style.list">
      <li v-for="worker in workers" :key="worker.name" :class="$style.list__card">
        <div
          role="image"
          :class="$style.list__card_img"
          :style="`background-image: url('${worker.img}')`"
        />
        <div :class="$style.list__card_content">
          <h3>{{ worker.name }}</h3>
          <p>
            {{ worker.position }}
          </p>
        </div>
      </li>
    </ul>
    <p :class="$style.container__text_bottom">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      workers: [
        {
          name: 'Marvin McKinney',
          img: '/img/workers/1.png',
          position: 'Pilot assistant'
        },
        {
          name: 'Savannah Nguyen',
          img: '/img/workers/2.png',
          position: 'Mechanic'
        },
        {
          name: 'Courtney Henry',
          img: '/img/workers/3.png',
          position: 'Stewardess'
        }
      ]
    }
  }
}
</script>

<style module lang="scss">
.container {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: $color_base_300;

  &__text {
    &_top {
      margin-top: 32px;
    }

    &_bottom {
      margin-top: 20px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: $color_base_500;
    margin: 32px 0;
  }
}

.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100% + 24px);
  margin: 0 -1.7%;

  &__card {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;
    margin: 0 1.7% 12px;
    width: 162px;
    min-width: 150px;

    &_img {
      width: 100%;
      height: 96px;
      border-radius: 16px;
      background-color: $color_base_50;
      background-position: center;
      background-size: cover;
    }

    &_content {
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;
        margin-top: 16px;
        color: $color_base_500;
      }

      p {
        margin: 8px 0 0;
        font-weight: 300;
        font-size: 12px;
        line-height: 148%;
      }
    }
  }
}

/* Dark theme */
[data-theme="dark"] {
  .container {
    h2 {
      color: $color_base_0;
    }
    p {
      color: $color_base_200;
    }
  }

  .list__card {
    h3 {
      color: $color_base_0;
    }
  }
}

@media (max-width: 375px) {
  .container {
    &__text{
      &_top {
        margin-top: 0;
      }
      &_bottom {
        margin-top: 8px;
      }
    }

    h2 {
      font-size: 20px;
      margin: 20px 0;
    }
  }

  .list {
    flex-direction: column;

    &__card {
      flex-direction: row;
      width: 100%;

      &_img {
        width: 132px;
        min-width: 132px;
        height: 80px;
      }

      &_content {
        margin-left: 16px;
        width: calc(100% - 16px - 132px);
      }
    }
  }
}
</style>
