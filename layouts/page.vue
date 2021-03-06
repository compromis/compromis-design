<template>
  <div class="page">
    <app-nav dark nav-label="Manual d'estil" logo-label="Disseny" />
    <div :class="{ 'sidebar-open': sidebarOpen }" class="container-fluid">
      <div class="layout">
        <div class="sidebar-wrapper">
          <aside class="sidebar">
            <div class="sidebar-scroll">
              <app-sidebar />
            </div>
            <button
              :aria-expanded="sidebarOpen"
              type="button"
              aria-label="Obrir menú"
              aria-controls="sidebar"
              class="navbar-toggler sidebar-toggler d-block d-lg-none"
              @click="toggleSidebar"
            >
              <span class="navbar-toggler-icon" />
            </button>
          </aside>
        </div>
        <div class="content-wrapper">
          <div class="content" @click="sidebarOpen = false">
            <main>
              <nuxt />
            </main>
            <app-footer in-page />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppSidebar from '@/components/AppSidebar'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppNav,
    AppSidebar,
    AppFooter
  },

  data () {
    return {
      sidebarOpen: false
    }
  },

  watch: {
    '$route' () {
      this.sidebarOpen = false
    }
  },

  methods: {
    toggleSidebar () {
      this.sidebarOpen = !this.sidebarOpen
    }
  },

  head () {
    return {
      bodyAttrs: {
        class: 'background-white'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .layout {
    display: flex;
  }

  .sidebar-wrapper {
    width: 25%;
    max-width: 450px;
    flex-shrink: 0;
  }

  .sidebar {
    position: sticky;
    top: $navbar-height;
    left: 0;
    right: 0;
    height: calc(100vh - 3.375rem);
    overflow: visible;
    transition: left .6s cubic-bezier(.56,0,.4,1.2), width .6s cubic-bezier(.56,0,.4,1.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 999em;
      height: 100%;
      background: $gray-lightest;
      z-index: -1;
      box-shadow: $inset-shadow;
    }

    &-scroll {
      height: calc(100vh - 3.375rem);
      overflow-y: scroll;
      padding-top: 15vh;
      padding-left: 6rem;
      margin-left: -2rem;
      margin-right: 2rem;
      @include scrollbar;
    }

    &-toggler {
      position: fixed;
      bottom: 2rem;
      right: 1rem;
      background: $gray-200;
      color: $white;
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
      box-shadow: $default-shadow;
    }
  }

  .content {
    position: relative;
    padding: 4rem;
    padding-top: 15vh;
    left: 0;
    transition: .6s cubic-bezier(.56,0,.4,1.2);
  }

  @include media-breakpoint-down(lg) {
    .sidebar-wrapper {
      width: 300px;
    }

    .content {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .sidebar-scroll {
      padding-left: 3rem;
    }
  }

  @include media-breakpoint-down(md) {
    .layout {
      flex-direction: column;
    }

    .sidebar {
      position: fixed;
      width: 80vw;
      left: -80vw;
      z-index: 20;
      padding: 1rem;

      &::before {
        box-shadow: $inset-shadow-xs;
      }

      &-open {
        .sidebar {
          left: 0;
          width: 70vw;
        }

        .content {
          left: 70vw;
          opacity: .5;
        }
      }

      &-scroll {
        margin-right: 0;
        padding-top: 0;
        padding-left: 2rem;
        padding-bottom: 3rem;
      }
    }

    .content {
      left: 0;
      padding: 4rem 0;
    }

    .container-fluid {
      overflow: hidden;
    }
  }
</style>
