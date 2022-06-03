<template>
  <div class="docs">
    <h1>Web</h1>
    <p class="intro">
      A Compromís utilitzem una sèrie de ferramentes pròpies per a desenvolupar les nostres pàgines web. A aquest paquet de ferramentes l'anomenem Blobby. A continuació hi ha una documentació i una guia de com emprar-les.
    </p>
    <div class="row">
      <div class="col-xl-8">
        <b-card color="red" class="text-red mt-5" padded variant="outline">
          Aquesta part de la guia d'estil requereix tindre coneixements en desenvolupament web i és només per a crear pàgines altament personalitzades. <strong>Si el que vols és una web per al teu col·lectiu local, posa't en contacte amb <a class="text-red link-underlined" href="mailto:web@compromis.net">web@compromis.net</a></strong>
        </b-card>

        <h3>Blobby</h3>
        <p>
          Blobby és el nom de la llibreria d'interfície d'usuari de Compromís, ideada per a crear pàgines i aplicacions web que segueixen el manual d'estil de Compromís. En aquesta guia dividim Blobby en dues parts: per una banda,
          <nuxt-link to="/web/utils">
            les utilitats
          </nuxt-link>, que és com li diem al a les variables CSS i SASS i les classes CSS del projecte; i per l'altra, <nuxt-link to="/web/components">
            els components
          </nuxt-link> basats en Vue, que permeten incloure amb facilitat elements de la interfície d'usuari ja estilitzats i personalitzables.
        </p>
        <h3>Instal·lació</h3>
        <p>
          Per incloure Blobby al teu projecte recomanem importar-lo amb un gestor de paquets com yarn o npm
          <pre class="mt-3"><code>yarn add @compromis/blobby</code></pre>
          <pre><code>npm install @compromis/blobby</code></pre>
        </p>
        <p>
          Importar Blobby i afegir el seu CSS a un projecte et permetrà usar les utilitats, però per emprar els components hauràs o bé d'importar Vue o bé treballar amb un projecte basat en Vue.
        </p>
        <p>Nosaltres recomanem Nuxt, un framework basat en Vue que facilita la creació de webs estàtiques. Per a iniciar un projecte amb Nuxt primaer instala'l:</p>
        <pre class="mt-3"><code>yarn create nuxt-app [nom-del-projecte] </code></pre>
        <pre><code>npm init nuxt-app [nom-del-projecte] </code></pre>
        <p class="mt-5">
          A continuació, afegeix Blobby.
        </p>
        <pre class="mt-3"><code>yarn add @compromis/blobby</code></pre>
        <pre><code>npm install @compromis/blobby</code></pre>
        <p class="mt-5">
          Blobby utilitza Sass, recomanem afegir-lo per a tindre major control sobre el CSS.
        </p>
        <pre class="mt-3"><code>yarn add -D sass-loader node-sass</code></pre>
        <pre><code>npm install -D sass-loader node-sass</code></pre>
        <p class="mt-5">
          Si no estàs familiaritzat amb aquestes ferramentes recomanem llegir amb deteniment la seua documentació.
        </p>
        <p class="text-md">
          <a class="me-2" href="https://nuxtjs.org/" target="_blank" rel="noopener"><fa :icon="['far', 'file']" fixed-width />Documentació de Nuxt</a> <a href="https://sass-lang.com/"><fa :icon="['far', 'file']" fixed-width />Documentació de Sass</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page'
}
</script>

<style lang="scss" scoped>
code {
  display: block;
  padding: 1rem;
  background: $black;
  color: $white;
}
</style>
