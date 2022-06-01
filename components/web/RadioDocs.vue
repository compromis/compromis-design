<template>
  <section class="docs">
    <h3 id="radiobutton">
      Botó d'opció
    </h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-radio&gt;</code></h4>
        <b-card variant="outline" size="sm" overflow-hidden>
          <table class="table tint-alternate-rows vertical-divisions">
            <colgroup>
              <col width="20%">
              <col width="40%">
              <col width="40%">
            </colgroup>
            <thead>
              <tr>
                <th>nom</th>
                <th>descripció</th>
                <th>valors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name *</td>
                <td colspan="2">
                  <small>String</small>. Nom del camp.
                </td>
              </tr>
              <tr>
                <td>value *</td>
                <td colspan="2">
                  <small>String</small>. Valor del camp.
                </td>
              </tr>
              <tr>
                <td>variant</td>
                <td><small>String</small>. Variant del camp</td>
                <td>
                  <b-radio-values v-model="radio.variant" name="radio-variant" :values="['default', 'inverted', 'black', 'white']" />
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><small>Bool</small>. Deshabilita el camp.</td>
                <td>
                  <b-radio-values v-model="radio.disabled" name="radio-disabled" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>focus-dark</td>
                <td>
                  <small>Bool</small>. Canvia el color del contorn de l'estat focus a negre.
                </td>
                <td>
                  <b-radio-values v-model="radio.focusDark" name="radio-focus-dark" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>card</td>
                <td>
                  <small>Bool, Object</small>. Converteix el camp en targeta. Opcionalment es poden passar les props de <em>b-card</em> en un objecte.
                </td>
                <td>
                  <b-radio-values v-model="radio.card" name="radio-card" :values="[true, false]" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
      <div class="docs-col-preview" style="--card-min-height: 200px;">
        <div class="sticky">
          <flippable-card>
            <template #frontSide>
              <b-radio name="option" default-value="un">
                Un
              </b-radio>
              <b-radio name="option" default-value="dos">
                Dos
              </b-radio>
              <b-radio name="option" default-value="tres">
                Tres
              </b-radio>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="radio">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultRadioProps = {
  disabled: false,
  variant: 'default',
  focusDark: false,
  card: false
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      radio: this.copyObject(defaultRadioProps)
    }
  },

  computed: {
    code () {
      return `<b-radio name="option" value="un"${this.radioProps}>
  Un
</b-radio>
<b-radio name="option" value="dos"${this.radioProps}>
  Dos
</b-radio>
<b-radio name="option" value="tres"${this.radioProps}>
  Tres
</b-radio>`
    },

    radioProps () {
      return this.inlineProps(this.radio, defaultRadioProps)
    }
  }
}
</script>
