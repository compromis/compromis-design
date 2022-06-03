<template>
  <div>
    <h3>Adaptacions</h3>
    <div class="other-section-grid">
      <b-card padded rises to="/xarxes-socials" class="other-card">
        <h4><fa :icon="['far', 'share-alt']" fixed-width class="me-2" /> Xarxes socials</h4>
      </b-card>
      <b-card padded rises to="/material-impres" class="other-card">
        <h4><fa :icon="['far', 'print']" fixed-width class="me-2" /> Material imprès</h4>
      </b-card>
      <b-card padded rises to="/fotografia" class="other-card">
        <h4><fa :icon="['far', 'camera']" fixed-width class="me-2" /> Fotografia</h4>
      </b-card>
      <b-card padded rises to="/video" class="other-card">
        <h4><fa :icon="['far', 'film']" fixed-width class="me-2" /> Vídeo</h4>
      </b-card>
      <b-card padded rises to="/campanyes" class="other-card">
        <h4><fa :icon="['far', 'megaphone']" fixed-width class="me-2" /> Campanyes</h4>
      </b-card>
      <b-card padded rises to="/web/setup" class="other-card">
        <h4><fa :icon="['far', 'code']" fixed-width class="me-2" />Web</h4>
      </b-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other-section-grid {
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  .card {
    padding: 2.25rem 1.75rem;
  }
}

.other-card {
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.25s ease-in-out;
  }

  &:hover h4{
    background: $gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      opacity: 1;
    }

    svg {
      transform: rotate(-10deg);
      color: var(--gradient-primary-start);
    }
  }
}
</style>
