<template>
  <section class="docs">
    <h3>Camp desplegable</h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-select&gt;</code></h4>
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
                <td>variant</td>
                <td><small>String</small>. Variant del camp de text</td>
                <td>
                  <b-radio-values v-model="select.variant" name="select-variant" :values="['default', 'float']" />
                </td>
              </tr>
              <tr>
                <td>name *</td>
                <td><small>String</small>. Nom del camp.</td>
                <td>
                  <b-input v-model="select.name" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>label *</td>
                <td><small>String</small>. Etiqueta del camp.</td>
                <td>
                  <b-input v-model="select.label" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany del camp.</td>
                <td>
                  <b-radio-values v-model="select.size" name="select-size" :values="['sm', 'md', 'lg']" />
                </td>
              </tr>
              <tr>
                <td>border</td>
                <td><small>String</small>. Estil del borde.</td>
                <td>
                  <b-radio-values v-model="select.border" name="select-border" :values="['default', 'muted', 'supermuted', 'outline']" />
                </td>
              </tr>
              <tr>
                <td>error</td>
                <td><small>String</small>. Text d'error.</td>
                <td>
                  <b-input v-model="select.error" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>block</td>
                <td><small>Bool</small>. El camp té amplada completa.</td>
                <td>
                  <b-radio-values v-model="select.block" name="select-block" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>no-label</td>
                <td><small>Bool</small>. Amaga l'etiqueta, però es manté per a lectors de pantalla.</td>
                <td>
                  <b-radio-values v-model="select.noLabel" name="select-block" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>label-on-top</td>
                <td><small>Bool</small>. En <em>float</em> força que l'etiqueta estiga sempre dalt.</td>
                <td>
                  <b-radio-values v-model="select.labelOnTop" name="select-label-on-top" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>focus-dark</td>
                <td><small>Bool</small>. Activar quan el botó cau sobre un fons taronja.</td>
                <td>
                  <b-radio-values v-model="select.focusDark" name="select-focus-dark" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><small>Bool</small>. Deshabilita el camp.</td>
                <td>
                  <b-radio-values v-model="select.disabled" name="select-disabled" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>span</td>
                <td>
                  <small>Number, Object</small>. Dins d'un <em>input-group</em>, estableix el número de columnes que ocupa el camp.
                </td>
                <td>
                  <b-radio-values v-model="select.span" name="select-span" :values="[1, 2, 3, 4]" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
      <div class="docs-col-preview">
        <div class="sticky">
          <flippable-card>
            <template #frontSide>
              <b-select v-model="value" v-bind="select">
                <option value="un">
                  Un
                </option>
                <option value="dos">
                  Dos
                </option>
                <option value="tres">
                  Tres
                </option>
              </b-select>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="select">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultSelectProps = {
  variant: 'default',
  name: 'example',
  label: 'Exemple',
  size: 'md',
  border: 'default',
  error: '',
  block: true,
  noLabel: false,
  labelOnTop: false,
  focusDark: false,
  disabled: false,
  span: 4
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      select: this.copyObject(defaultSelectProps),
      value: null
    }
  },

  computed: {
    code () {
      return `<b-select${this.selectProps}>
  <option value="un">Un</option>
  <option value="dos">Dos</option>
  <option value="tres">Tres</option>
</b-select>`
    },

    selectProps () {
      return this.inlineProps(this.select, defaultSelectProps)
    }
  }
}
</script>
