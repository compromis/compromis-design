<template>
  <div>
    <h1>Components</h1>
    <p class="intro">
      Components
    </p>
    <section>
      <h2>Elements</h2>
      <card-docs />
      <nav-docs />
    </section>
    <section>
      <h2>Inputs</h2>
      <button-docs />
    </section>
  </div>
</template>

<script>
import CardDocs from '@/components/web/CardDocs'
import NavDocs from '@/components/web/NavDocs'
import ButtonDocs from '@/components/web/ButtonDocs'

export default {
  layout: 'page',

  components: {
    CardDocs,
    NavDocs,
    ButtonDocs
  }
}
</script>

<style lang="scss" scoped>

</style>
