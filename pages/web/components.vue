<template>
  <div>
    <h1>Components</h1>
    <p class="intro">
      Components
    </p>
    <section>
      <h2>Elements</h2>
      <card-docs />
      <nav-docs />
      <footer-docs />
    </section>
    <section>
      <h2>Inputs</h2>
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
    CheckboxDocs
  }
}
</script>
