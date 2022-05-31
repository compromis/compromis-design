<template>
  <div class="menu" @click.capture="closeSidebar">
    <nuxt-link to="/logo" class="does-not-bank">
      <fa :icon="['far', 'chevron-left']" fixed-width /> <span>Torna al manual</span>
    </nuxt-link>
    <ul class="menu-web">
      <li>
        <nuxt-link to="/web/setup">
          <fa :icon="['far', 'cog']" fixed-width /> <span>Instal·lació</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/web/components">
          <fa :icon="['far', 'puzzle-piece']" fixed-width /> <span>Components</span>
        </nuxt-link>
        <b-nav
          v-if="$route.name === 'web-components'"
          v-b-scrollspy="80"
        >
          <b-nav-item v-scroll-to="'#card'" href="#card">
            Targeta
          </b-nav-item>
          <b-nav-item v-scroll-to="'#nav'" href="#nav">
            Navegació
          </b-nav-item>
          <b-nav-item v-scroll-to="'#footer'" href="#footer">
            Peu de pàgina
          </b-nav-item>
          <b-nav-item v-scroll-to="'#pills'" href="#pills">
            Pastilles
          </b-nav-item>
          <b-nav-item v-scroll-to="'#tabs'" href="#tabs">
            Pestanyes
          </b-nav-item>
          <b-nav-item v-scroll-to="'#badges'" href="#badges">
            Insignies
          </b-nav-item>
          <b-nav-item v-scroll-to="'#button'" href="#button">
            Botó
          </b-nav-item>
          <b-nav-item v-scroll-to="'#input'" href="#input">
            Camp de text
          </b-nav-item>
          <b-nav-item v-scroll-to="'#select'" href="#select">
            Camp desplegable
          </b-nav-item>
          <b-nav-item v-scroll-to="'#inputgroup'" href="#inputgroup">
            Grup de camps
          </b-nav-item>
          <b-nav-item v-scroll-to="'#radiobutton'" href="#radiobutton">
            Botó d'opció
          </b-nav-item>
          <b-nav-item v-scroll-to="'#radiogroup'" href="#radiogroup">
            Grup de botons d'opció
          </b-nav-item>
          <b-nav-item v-scroll-to="'#checkbox'" href="#checkbox">
            Casella de selecció
          </b-nav-item>
        </b-nav>
      </li>
      <li>
        <nuxt-link to="/web/utils">
          <fa :icon="['far', 'wrench']" fixed-width /> <span>Utilitats</span>
        </nuxt-link>
        <b-nav
          v-if="$route.name === 'web-utils'"
          v-b-scrollspy="80"
        >
          <b-nav-item v-scroll-to="'#css'" href="#css">
            Classes CSS
          </b-nav-item>
          <b-nav-item v-scroll-to="'#variables'" href="#variables">
            Variables
          </b-nav-item>
        </b-nav>
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
