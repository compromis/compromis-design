<template>
  <div>
    <h1>Campanyes</h1>
    <p class="intro">
      A aquesta secció podeu descarregar tot el material relacionat amb les diferents campanyes puntuals.
    </p>
    <p>
      <b-button
        variant="primary"
        size="lg"
        outline
        has-shadow
        href="https://compromis.net/espai/targes/campanyes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa :icon="['far', 'megaphone']" class="me-1" /> Repositori de campanyes
      </b-button>
      <small class="text-muted ms-2"><fa :icon="['far', 'lock-alt']" /></small>
    </p>
  </div>
</template>

<script>

export default {
  layout: 'page',

  head () {
    return {
      title: "Campanyes - Manual d'estil - Compromís"
    }
  }
}
</script>
