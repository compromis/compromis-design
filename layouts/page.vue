<template>
  <div class="page">
    <app-nav inside nav-label="Manual d'estil" logo-label="Disseny" @sidebar-toggled="toggleSidebar" />
    <div :class="{ 'sidebar-open': sidebarOpen }" class="container-fluid">
      <div class="layout">
        <div class="sidebar-wrapper">
          <aside class="sidebar">
            <div class="sidebar-scroll">
              <app-sidebar />
            </div>
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
  .layout {
    display: flex;
  }

  .sidebar-wrapper {
    display: flex;
    width: 23rem;
    border-right: 1px solid var(--gray-200);
    flex-shrink: 0;
  }

  .sidebar {
    overflow: visible;
    transition: left .6s cubic-bezier(.56,0,.4,1.2), width .6s cubic-bezier(.56,0,.4,1.2);
    padding-top: 15vh;
    flex-grow: 1;

    &-scroll {
      top: calc(.25rem + #{$navbar-height});
      position: sticky;
      max-height: calc(100vh - #{$navbar-height});
      overflow-y: auto;
      padding: 0.25rem;
      margin-left: -1rem;
      margin-right: 1rem;
      @include scrollbar;
    }
  }

  .content {
    position: relative;
    padding: 4rem;
    padding-top: 15vh;
    left: 0;
    transition: .6s cubic-bezier(.56,0,.4,1.2);

    &-wrapper {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }
  }

  @include media-breakpoint-down(lg) {
    .sidebar-wrapper {
      width: 300px;
    }

    .content {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  @include media-breakpoint-down(md) {
    .layout {
      flex-direction: column;
    }

    .sidebar {
      padding-top: 0;

      &-wrapper {
        position: fixed;
        width: 75vw;
        top: $navbar-height;
        left: 0;
        bottom: 0;
        z-index: 20;
        padding-left: 1rem;
        transform: translateX(-100%);
        transition: .6s cubic-bezier(.56,0,.4,1.2);
      }

      &-scroll {
        top: 0;
        padding-top: .75rem;
      }

      &-open {
        .sidebar-wrapper {
          transform: translateX(0);
        }

        .content {
          left: calc(75vw + 1rem);
          opacity: .5;
        }
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
