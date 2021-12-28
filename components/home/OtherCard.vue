<template>
  <div>
    <h3>Adaptacions</h3>
    <div class="other-section-grid">
      <b-card padded rises to="/xarxes-socials">
        <h4><fa :icon="['far', 'share-alt']" fixed-width /> Xarxes socials</h4>
      </b-card>
      <b-card padded rises to="/material-impres">
        <h4><fa :icon="['far', 'print']" fixed-width /> Material imprès</h4>
      </b-card>
      <b-card padded rises to="/fotografia">
        <h4><fa :icon="['far', 'camera']" fixed-width /> Fotografia</h4>
      </b-card>
      <b-card padded rises to="/video">
        <h4><fa :icon="['far', 'film']" fixed-width /> Vídeo</h4>
      </b-card>
      <b-card padded rises to="/campanyes">
        <h4><fa :icon="['far', 'megaphone']" fixed-width /> Campanyes</h4>
      </b-card>
      <b-card padded rises href="https://somriure.compromis.net" target="_blank">
        <h4><fa :icon="['far', 'newspaper']" fixed-width />El Somriure</h4>
      </b-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other-section-grid {
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  .card {
    padding: 2.25rem 1.75rem;
  }
}

@include media-breakpoint-down(md) {
  .other-section-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
