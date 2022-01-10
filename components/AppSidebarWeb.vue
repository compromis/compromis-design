<template>
  <div class="menu" @click.capture="closeSidebar">
    <nuxt-link to="/logo" class="template-item">
      <fa :icon="['far', 'chevron-left']" fixed-width /> <span>Torna al manual</span>
    </nuxt-link>
    <ul class="menu-web">
      <li>
        <nuxt-link to="/web/setup" class="template-item">
          <fa :icon="['far', 'cog']" fixed-width /> <span>Instal·lació</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/web/components" class="template-item">
          <fa :icon="['far', 'puzzle-piece']" fixed-width /> <span>Components</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/web/utils" class="template-item">
          <fa :icon="['far', 'wrench']" fixed-width /> <span>Utilitats</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  methods: {
    closeSidebar () {
      this.$root.$emit('toggleSidebar')
    }
  }
}
</script>
