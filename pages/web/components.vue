<template>
  <div>
    <h1>Components</h1>
    <p class="intro">
      Components
    </p>

    <card-docs />
    <button-docs />
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
