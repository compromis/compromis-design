<template>
  <nav :class="['navbar', {'navbar-inside': inside}]">
    <div class="container-fluid">
      <div class="nav-logo">
        <a href="https://compromis.net" class="nav-logo-compromis" aria-label="Compromís">
          <compromis-logo />
        </a>
        <nuxt-link v-if="logoLabel" to="/" class="nav-logo-append ms-2">
          {{ logoLabel }}
        </nuxt-link>
      </div>
    </div>
  </nav>
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
    z-index: 10000;

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
      border-bottom: 1px solid var(--gray-200);
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
