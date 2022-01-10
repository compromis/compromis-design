<template>
  <div>
    <h1>Utilitats</h1>
    <div class="col-xl-8">
      <h3>Color de fons</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <div class="color-block bg-color">
          .bg-color
        </div>
        <div class="color-block bg-white">
          .bg-white
        </div>
        <div class="color-block bg-black">
          .bg-black
        </div>
        <div class="color-block bg-primary">
          .bg-primary
        </div>
        <div class="color-block bg-muted">
          .bg-muted
        </div>
        <div class="color-block bg-supermuted">
          .bg-supermuted
        </div>
        <div class="color-block bg-gradient">
          .bg-gradient
        </div>
      </b-card>

      <h3>Tamanys de text</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.text-xs</td><td>0.75rem</td></tr>
          <tr><td>.text-sm</td><td>0.875rem</td></tr>
          <tr><td>.text-md</td><td>1rem </td></tr>
          <tr><td>.text-lg</td><td>1.125rem </td></tr>
          <tr><td>.text-xl</td><td>1.25rem </td></tr>
          <tr><td>.text-2xl</td><td>1.666rem </td></tr>
          <tr><td>.text-3xl</td><td>2.369rem</td></tr>
          <tr><td>.text-4xl</td><td>3.157rem </td></tr>
          <tr><td>.text-5xl</td><td>4.209rem </td></tr>
          <tr><td>.text-6xl</td><td>5.653rem</td></tr>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page'
}
</script>

<style lang="scss" scoped>
.color-block {
  padding: 1rem;
  border: $border-radius-lg;
}
</style>
