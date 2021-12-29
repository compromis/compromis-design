<template>
  <div class="container home">
    <!-- eslint-disable vue/singleline-html-element-content-newline -->
    <h2>
      Recursos<br>de marca
    </h2>

    <p class="intro">
      A Compromís creiem en la política de baix cap a dalt. Per això, fem accesible
      la nostra <nuxt-link to="/logo">guia d'estil</nuxt-link>, amb tot el material gràfic,
      instruccions per a la seua correcta aplicació i ferramentes per facilitar la
      creació de material.
    </p>

    <logo-card :municipalities="municipalities" />
    <banners-card />

    <div class="type-color-section">
      <typography-card />
      <colors-card />
    </div>

    <other-card />

    <div class="cardless-text">
      <p>No trobes el que busques? Busca al repositori de <a href="https://comprom.is/material" target="_blank" rel="noopener noreferrer">material antic</a>.</p>
    </div>
  </div>
</template>

<script>
import LogoCard from '@/components/home/LogoCard.vue'
import TypographyCard from '@/components/home/TypographyCard.vue'
import ColorsCard from '@/components/home/ColorsCard.vue'
import OtherCard from '@/components/home/OtherCard.vue'
import BannersCard from '@/components/home/BannersCard'

export default {
  components: {
    LogoCard,
    TypographyCard,
    ColorsCard,
    OtherCard,
    BannersCard
  },

  async asyncData ({ $axios }) {
    const municipalities = await $axios.$get('https://compromis.net/espai/targes/municipalities')
    return { municipalities }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  margin-top: 2rem;
}

.type-color-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;
}
</style>
