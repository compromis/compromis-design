<template>
  <div>
    <h1>Tipografia</h1>
    <p class="intro">
      La tipografia que emprem al material de Compromís és Manrope. És important no usar cap altra tipografia
      (excepte en casos excepcionals) i usar els dos pesos (Medium i Extra Bold) com s'explica a continuació.
    </p>
    <p>
      <b-button variant="primary" size="lg" outline shadow href="/assets/fonts/Manrope.zip">
        <fa :icon="['far', 'arrow-circle-down']" class="me-1" /> Descarrega Manrope
      </b-button>
    </p>
    <div class="row mt-8">
      <div class="col-xl-8">
        <div class="typography-sample bold">
          <span class="typography-sample-icon">Aa</span>
          <span class="typography-sample-letters d-none d-md-block">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
            abcdefghijklmnopqrstuvwxyz<br>
            0123456789
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-8">
        <h3 class="mt-5">
          Manrope ExtraBold
        </h3>
        <p>
          Utilitzada per a textos a tamany gran, títols, titulars, encapçalaments i per a destacar alguna cosa.
          No s'ha d'utilitzar per a escriure textos llargs.
        </p>
      </div>
    </div>
    <div class="row mt-8">
      <div class="col-xl-8">
        <div class="typography-sample">
          <span class="typography-sample-icon">Aa</span>
          <span class="typography-sample-letters d-none d-md-block">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
            abcdefghijklmnopqrstuvwxyz<br>
            0123456789
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-8">
        <h3 class="mt-5">
          Manrope Medium
        </h3>
        <p>
          Utilitzada per a títols, cos de text, documents, i textos en general.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: "Tipografia - Manual d'estil - Compromís"
    }
  }
}
</script>

<style lang="scss" scoped>
  .mt-8 {
    margin-top: 5rem;
  }

  .typography-sample {
    display: flex;
    padding: 1rem 3rem;
    border: 1px var(--gray-200) solid;
    border-radius: $border-radius;
    align-items: center;

    &.bold {
      font-weight: 900;
    }

    &-icon {
      font-size: 8.5rem;
      margin-right: 1rem;
    }

    &-letters {
      font-size: 1.25rem;
      position: relative;
      top: .6rem;
      color: var(--gray-600);
    }
  }
</style>
