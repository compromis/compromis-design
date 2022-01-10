<template>
  <div :class="{'color': true, 'color--mini': mini }">
    <b-button v-clipboard:copy="hex" v-clipboard:success="onCopy" :class="`color-swatch color-swatch-${name}`">
      <span :class="{'color-swatch-text': true, 'color-swatch-text-dark': dark }">{{ text }}</span>
    </b-button>
    <h4 v-if="!mini" class="mt-3 mt-lg-0">
      {{ title }}
    </h4>
    <p v-if="!mini">
      {{ useCase }}
    </p>
    <div v-if="!mini" class="color-info">
      <div class="color-info-value">
        <span>RGB</span>
        <div v-for="(rgbValue, i) in rgbValues" :key="i">
          <div v-if="rgbValues.length > 1" :style="{ backgroundColor: hexValues[i] }" class="color-sample" /> {{ rgbValue }}
        </div>
      </div>
      <div class="color-info-value">
        <span>HEX</span>
        <div v-for="(hexValue, i) in hexValues" :key="i">
          <div v-if="hexValues.length > 1" :style="{ backgroundColor: hexValues[i] }" class="color-sample" /> {{ hexValue }}
        </div>
      </div>
      <div class="color-info-value">
        <span>CMYK</span>
        <div v-for="(cmykValue, i) in cmykValues" :key="i">
          <div v-if="cmykValues.length > 1" :style="{ backgroundColor: hexValues[i] }" class="color-sample" /> {{ cmykValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorSwatch',

  props: {
    name: {
      type: String,
      default: 'orange'
    },
    title: {
      type: String,
      default: ''
    },
    rgb: {
      type: [String, Array],
      default: ''
    },
    hex: {
      type: [String, Array],
      default: ''
    },
    cmyk: {
      type: [String, Array],
      default: ''
    },
    useCase: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      text: 'Copiar HEX'
    }
  },

  computed: {
    rgbValues () {
      if (typeof this.rgb === 'string') { return [this.rgb] }
      return this.rgb
    },
    hexValues () {
      if (typeof this.hex === 'string') { return [this.hex] }
      return this.hex
    },
    cmykValues () {
      if (typeof this.cmyk === 'string') { return [this.cmyk] }
      return this.cmyk
    }
  },

  methods: {
    onCopy () {
      this.text = 'Copiat!'
      setTimeout(() => { this.text = 'Copiar HEX' }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.color {
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: .5rem;
  max-width: 750px;
  align-items: start;

  h4 {
    margin-bottom: 0;
  }

  p {
    font-size: 1.15rem;
  }

  &-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid $gray-400;
    color: $gray-600;
    padding: .25rem 1rem;
    border-radius: $border-radius;
    font-size: 1rem;
    margin-top: auto;

    &-value {
      margin-top: -.25rem;
    }

    span {
      font-weight: 900;
      grid-row: span 2;
      font-size: .75rem;
    }
  }

  &-swatch {
    display: inline-flex;
    grid-column: 1;
    grid-row: span 3;
    align-items: center;
    justify-content: center;
    position: relative;
    color: $white;
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -1px;
    width: 15rem;
    height: 15rem;
    border-width: 0px;
    border-radius: 1rem;
    box-shadow: var(--shadow-default);
    transition: .2s ease-in-out;

    &-text {
      opacity: 0;
      transition: .2s ease-in-out;
    }

    &:hover, &:focus {
      box-shadow: var(--shadow-default);
      transform: rotate($rotation) scale(1.05);
      text-decoration: none;

      .color-swatch-text {
        opacity: 1;
        color: $white;

        &-dark {
          color: $gray-900;
        }
      }
    }

    &:active {
      transform: rotate(0) scale(.95);
      opacity: .75;
    }

    &-orange {
      background: $primary;
    }

    &-white {
      background: $white;
      border: 1px solid $gray-200;
    }

    &-gradient {
      background: $gradient;
    }

    &-gray-dark {
      background: $gray-900;
      border: 1px solid $gray-800;
    }

    &-gray-med {
      background: $gray-600;
    }

    &-gray-light {
      background: $gray-100;
    }

    &--xs {
      height: 4.5rem;

      &:hover {
        transform:  translateY(-.5rem) rotate(0) scale(1);
      }

      &:active {
        transform:  translateY(.25rem) rotate(0) scale(1);
      }
    }
  }

  &-sample {
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: .25rem;
  }

  &--mini {
    display: flex;
    display: flex;
    align-items: center;

    .color-swatch {
      width: 6rem;
      height: 6rem;
      font-size: 1rem;
      padding: 1rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .color {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    max-width: 100%;

    &-info {
      grid-template-columns: 1fr;
    }

    &-swatch {
      width: 100%;

      &:hover {
        transform: none;
      }
    }
  }

  .color--mini {
    .color-swatch {
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>
