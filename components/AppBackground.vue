<template>
  <div id="scene" ref="scene" :class="{'blobs': true, 'hidden': hidden }">
    <div class="blob-holder" data-depth="0.2">
      <div class="blob blob-1" />
    </div>
    <div class="blob-holder" data-depth="0.05">
      <div class="blob blob-2" />
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'AppBackground',

  props: {
    hidden: Boolean
  },

  mounted () {
    const scene = this.$refs.scene
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(scene)
  }
}
</script>

<style lang="scss" scoped>
  .blobs {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;

    .blob {
      position: absolute;
      border-radius: 5rem;
      background: linear-gradient(45deg, $gradient-primary-start, $gradient-primary-end);
      width: 50rem;
      height: 50rem;
      animation-name: blob1;
      animation-duration: 20s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      transition: 1s ease-in-out;
      will-change: transform, left, top, right, bottom;

      &-holder {
        width: 100%;
        height: 100%;
      }

      &-1 {
        animation-name: blob1;
        top: 80%;
        left: -30rem;
      }

      &-2 {
        animation-name: blob2;
        top: -30rem;
        right: -23rem;
      }
    }
  }

  .hidden {
    .blob {
      &-1 {
        top: -60rem;
        left: -60rem;
      }

      &-2 {
        top: -60rem;
        right: -60rem;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .blobs {
      .blob {
        &-1 {
          top: 80%;
          left: -40rem;
        }

        &-2 {
          top: -45rem;
          right: -35rem;
        }
      }
    }
  }

  @keyframes blob1 {
    from {
      transform: translate(3rem, 3rem) rotate($rotation);
    }

    to {
      transform: translate(0, 0) rotate($rotation);
    }
  }

  @keyframes blob2 {
    from {
      transform: translate(-3rem, 3rem) rotate($rotation);
    }

    to {
      transform: translate(0, 0) rotate($rotation);
    }
  }
</style>
