<template>
  <div>
    <h3>Tipografia</h3>
    <b-card size="lg">
      <b-card-section>
        <h5 class="text-bold mb-2" style="font-size: 2rem;">
          Manrope ExtraBold
        </h5>
        <h5 class="text-regular text-muted mb-4" style="font-size: 2rem;">
          Manrope Medium
        </h5>
        <div class="mb-2">
          Setze jutges d'un jutjat mengen fetge d'un penjat.
        </div>
        <div class="text-muted">
          Setze jutges d'un jutjat mengen fetge d'un penjat. Si el penjat es despenja, es menja els setze fetges dels jutges del jutjat que l'han penjat.
        </div>
      </b-card-section>
      <b-card-section border-top class="d-flex">
        <b-button
          to="/tipografia"
          variant="primary"
          size="lg"
          has-shadow
          outline
          class="me-2"
        >
          <span>Guies d'ús</span>
        </b-button>
        <b-button href="/assets/fonts/Manrope.zip" variant="supermuted" size="lg" outline has-shadow>
          <fa :icon="['far', 'arrow-circle-down']" /> Manrope
        </b-button>
      </b-card-section>
    </b-card>
  </div>
</template>

<style lang="scss" scoped>
  h4 {
    font-size: 2rem;
  }
</style>
