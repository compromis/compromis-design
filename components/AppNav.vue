<template>
  <b-navbar :class="['navbar', {'navbar-inside' : inside}]" :toggleable="true" fixed="top">
    <div class="container-fluid">
      <div class="nav-logo">
        <nuxt-link to="/" class="nav-logo-compromis" aria-label="compromis">
          <compromis-logo />
        </nuxt-link>
        <div v-if="logoLabel" class="nav-logo-append ms-2">
          {{ logoLabel }}
        </div>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNav',

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
    border-bottom: 1px solid var(--gray-200);
    background: var(--white);

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
      background: var(--white);
      border-bottom: var(--gray-200);
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      z-index: 100;
      padding: .75rem 0;

      .nav-logo-append {
        display: none !important;
      }

      .app-label {
        margin-left: .5rem;
      }
    }
  }
</style>
