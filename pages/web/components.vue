<template>
  <div>
    <h1>Components</h1>
    <p class="intro">
      Els components són els blocs de construcció de l'interfície d'usuari amb Blobby.
    </p>
    <section>
      <h2>Elements</h2>
      <card-docs />
      <nav-docs />
      <footer-docs />
      <pill-docs />
      <tab-docs />
      <badge-docs />
    </section>
    <section>
      <h2>Formularis</h2>
      <button-docs />
      <input-docs />
      <select-docs />
      <input-group-docs />
      <radio-docs />
      <radio-group-docs />
      <checkbox-docs />
    </section>
  </div>
</template>

<script>
import CardDocs from '@/components/web/CardDocs'
import NavDocs from '@/components/web/NavDocs'
import ButtonDocs from '@/components/web/ButtonDocs'
import FooterDocs from '@/components/web/FooterDocs'
import InputDocs from '@/components/web/InputDocs'
import InputGroupDocs from '@/components/web/InputGroupDocs'
import SelectDocs from '@/components/web/SelectDocs'
import RadioDocs from '@/components/web/RadioDocs'
import RadioGroupDocs from '@/components/web/RadioGroupDocs'
import CheckboxDocs from '@/components/web/CheckboxDocs'
import PillDocs from '@/components/web/PillDocs'
import TabDocs from '@/components/web/TabDocs'
import BadgeDocs from '@/components/web/BadgeDocs'

export default {
  layout: 'page',

  components: {
    CardDocs,
    NavDocs,
    ButtonDocs,
    FooterDocs,
    InputDocs,
    InputGroupDocs,
    SelectDocs,
    RadioDocs,
    RadioGroupDocs,
    CheckboxDocs,
    PillDocs,
    TabDocs,
    BadgeDocs
  }
}
</script>
