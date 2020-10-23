<template>
  <div :class="$style.terms">
    <p>{{ info.term_text }}</p>
    <h2>Additional conditions:</h2>
    <ul>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </li>
    </ul>
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
.terms {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: $color_base_300;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 152%;
    color: $color_base_500;
    margin: 24px 0;
  }

  ul {
    li {
      position: relative;
      list-style: none;
      margin: 0 0 16px 20px;

      &::before {
        position: absolute;
        top: 10px;
        left: -20px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        content: '';
        background: $color_secondary_400;
      }
    }
  }
}

/* Dark theme */
[data-theme="dark"] {
  .terms {
    color: $color_base_200;

    h2 {
      color: $color_base_0;
    }
  }
}

@media (max-width: 375px) {
  .terms {
    h2 {
      margin: 16px 0;
    }

    ul {
      li {
        margin: 0 0 8px 12px;

        &::before {
          position: absolute;
          top: 10px;
          left: -12px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          content: '';
          background: $color_secondary_400;
        }
      }
    }
  }
}
</style>
