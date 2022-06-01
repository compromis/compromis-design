<template>
  <section class="docs">
    <h3 id="checkbox">
      Casella de selecció
    </h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-checkbox&gt;</code></h4>
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
                  <b-radio-values v-model="checkbox.variant" name="checkbox-variant" :values="['default', 'inverted', 'black', 'white']" />
                </td>
              </tr>
              <tr>
                <td>is-switch</td>
                <td>
                  <small>Bool</small>. Converteix el camp en un Switch.
                </td>
                <td>
                  <b-radio-values v-model="checkbox.isSwitch" name="checkbox-is-switch" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><small>Bool</small>. Deshabilita el camp.</td>
                <td>
                  <b-radio-values v-model="checkbox.disabled" name="checkbox-disabled" :values="[true, false]" />
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
              <b-checkbox v-model="value" name="option3" default-value="un" v-bind="checkbox">
                Un
              </b-checkbox>
              <b-checkbox v-model="value" name="option3" default-value="dos" v-bind="checkbox">
                Dos
              </b-checkbox>
              <b-checkbox v-model="value" name="option3" default-value="tres" v-bind="checkbox">
                Tres
              </b-checkbox>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="checkbox">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultCheckboxProps = {
  disabled: false,
  variant: 'default',
  isSwitch: false
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      checkbox: this.copyObject(defaultCheckboxProps),
      value: []
    }
  },

  computed: {
    code () {
      return `<b-checkbox name="option" value="un"${this.checkboxProps}>
  Un
</b-checkbox>
<b-checkbox name="option" value="dos"${this.checkboxProps}>
  Dos
</b-checkbox>
<b-checkbox name="option" value="tres"${this.checkboxProps}>
  Tres
</b-checkbox>`
    },

    checkboxProps () {
      return this.inlineProps(this.checkbox, defaultCheckboxProps)
    }
  }
}
</script>
