<template>
  <nav :class="['navbar', 'container-fluid', {'navbar-inside': inside}]">
    <div class="nav-logo">
      <a href="https://compromis.net" class="nav-logo-compromis" aria-label="Compromís">
        <compromis-logo collapsible="md" />
      </a>
      <div class="nav-logo-append">
        <nuxt-link v-if="logoLabel" to="/">
          {{ logoLabel }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="inside" class="dark-mode-toggle">
      <button v-if="dark" title="Mode dia" class="dark-mode-button" @click="dark = false">
        <span class="d-none d-md-inline">Mode dia</span> <fa :icon="['far', 'sun']" fixed-width />
      </button>
      <button v-else title="Mode nit" class="dark-mode-button" @click="dark = true">
        <span class="d-none d-md-inline">Mode nit</span> <fa :icon="['far', 'moon']" fixed-width />
      </button>
    </div>
    <button
      v-if="inside"
      :aria-expanded="sidebarOpen"
      type="button"
      aria-label="Obrir menú"
      aria-controls="sidebar"
      :class="['menu-button d-block d-md-none', {'is-active' : sidebarOpen}]"
      @click="toggleSidebar"
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
    }
  },

  data () {
    return {
      sidebarOpen: false,
      dark: false
    }
  },

  watch: {
    dark (dark) {
      this.handleDarkMode(dark)
    }
  },

  mounted () {
    const prefersDark = localStorage.getItem('prefers-dark')
    this.dark = prefersDark
    this.handleDarkMode(prefersDark)

    this.$root.$on('toggleSidebar', this.toggleSidebar)
  },

  methods: {
    toggleSidebar () {
      this.$emit('sidebar-toggled')
      this.sidebarOpen = !this.sidebarOpen
    },

    handleDarkMode (dark) {
      const docHtml = document.documentElement

      if (dark) {
        docHtml.classList.add('dark')
        localStorage.setItem('prefers-dark', true)
      } else {
        docHtml.classList.remove('dark')
        localStorage.removeItem('prefers-dark')
      }
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

    &-inside {
      background: var(--body-bg);
      border-bottom: 1px var(--gray-200) solid;
    }
  }

  .menu-button {
    display: inline-block;
    padding: 0;
    background-color: transparent;
    border: none;
    margin-left: 1rem;
  }

  .dark-mode-toggle {
    display: flex;
    align-items: center;
  }

  .dark-mode-button {
    appearance: none;
    background: transparent;
    color: var(--text-muted);
    border: 0;

    &:hover {
      color: var(--text-color);
    }
  }

  .burger-icon {
    @include burger(1.5rem, 2px, 5px, var(--gray-700));
  }

  .menu-button.is-active .burger-icon {
    @include burger-to-cross;
  }

  @include media-breakpoint-down(lg) {
    .navbar {
      border-bottom: 1px solid var(--gray-200);
      background: var(--body-bg);
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
