<template>
  <nav :class="['navbar', 'container-fluid', {'navbar-inside': inside}]">
    <div class="nav-logo">
      <a href="https://compromis.net" class="nav-logo-compromis" aria-label="Compromís">
        <compromis-logo collapsible="md" />
      </a>
      <nuxt-link v-if="logoLabel" to="/" class="nav-logo-append ms-2">
        {{ logoLabel }}
      </nuxt-link>
    </div>
    <button
      v-if="inside"
      :aria-expanded="sidebarOpen"
      type="button"
      aria-label="Obrir menú"
      aria-controls="sidebar"
      class="menu-button d-block d-lg-none"
      @click="$emit('sidebar-toggled')"
    >
      <span class="burger-icon" />
    </button>
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
    },
    sidebarOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import "sass-burger/burger";

  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: .75rem;
    padding-bottom: .75rem;
    transition: .25s ease-in-out;
    z-index: 10000;
  }

  .menu-button {
    display: inline-block;
    padding: .5em;
    background-color: #fafafa;
    border: 1px solid #ccc;
  }

  .burger-icon {
    @include burger(25px, 3px, 5px, #444);
  }

  .menu-button.is-active .burger-icon {
    @include burger-to-cross;
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

      .app-label {
        margin-left: .5rem;
      }
    }
  }
</style>
