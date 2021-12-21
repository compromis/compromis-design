<template>
  <b-navbar :class="['navbar', {'navbar-inside' : inside}]" :toggleable="true" fixed="top">
    <div class="container-fluid">
      <nuxt-link to="/" class="logo-link">
        <compromis-logo />
      </nuxt-link>
      <div v-if="logoLabel" class="nav-label logo-label">
        {{ logoLabel }}
      </div>
    </div>
  </b-navbar>
</template>

<script>
import CompromisLogo from '@compromis/blobby/components/logos/CompromisLogo.vue'

export default {
  name: 'AppNav',

  components: {
    CompromisLogo
  },

  props: {
    navLabel: {
      type: String,
      default: ''
    },
    logoLabel: {
      type: String,
      default: ''
    },
    inside: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .75rem 0;
    transition: .25s ease-in-out;

    .logo {
      height: 28px;

      &-link {
        color: $white;
      }
    }

    .nav-label {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      letter-spacing: -.3px;
      line-height: 1;
      white-space: nowrap;
      color: $white;
    }

    .logo-label {
      padding: .3rem .75rem;
      color: $gray-700;
    }

    .app-label {
      margin-left: auto;
    }

    &-inside {
      background: $white;
      border-bottom: 1px solid $gray-200;

      .nav-label {
        color: $gray-700;
      }
    }

    &-toggler {
      border: 0;

      &-icon {
        background-image: none !important;
        position: relative;

        &::before,
        &::after {
          content: '';
          position: absolute;
          background: $body-color;
          height: 2px;
          left: 3px;
          right: 3px;
          top: 25%;
          transition: .4s ease-in-out;
        }

        &::after {
          content: '';
          top: auto;
          bottom: 25%;
        }
      }

      &[aria-expanded="true"] {
        .navbar-toggler-icon {
          &::after {
            transform: rotate(45deg) translateY(-5px) translateX(-3px);
          }
          &::before {
            transform: rotate(-46deg) translateY(5px) translateX(-5px);
          }
        }
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .navbar {
      background: white;
      border-bottom: $gray-200;

      &-label {
        color: $gray-700;
      }

      & > .container-fluid {
        padding: 0 2rem;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      z-index: 100;
      padding: .75rem 0;

      & > .container-fluid {
        padding: 0 1rem;
      }

      .logo-label {
        display: none !important;
      }

      .app-label {
        margin-left: .5rem;
      }

      .logo-link {
        display: inline-block;
        width: 30px;
        overflow: hidden;
      }
    }
  }
</style>
