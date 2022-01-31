<template>
  <div>
    <h1>Components</h1>
    <p class="intro">
      Components
    </p>
    <section>
      <h2>Elements</h2>
      <card-docs />
      <button-docs />
    </section>
  </div>
</template>

<script>
import CardDocs from '@/components/web/CardDocs'
import ButtonDocs from '@/components/web/ButtonDocs'

export default {
  layout: 'page',

  components: {
    CardDocs,
    ButtonDocs
  }
}
</script>

<style lang="scss" scoped>

</style>
