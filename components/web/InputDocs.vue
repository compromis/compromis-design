<template>
  <section class="docs">
    <h3 id="input">
      Camp de text
    </h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-input&gt;</code></h4>
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
                  <b-radio-values v-model="input.variant" name="input-variant" :values="['default', 'float']" />
                </td>
              </tr>
              <tr>
                <td>name *</td>
                <td><small>String</small>. Nom del camp.</td>
                <td>
                  <b-input v-model="input.name" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>label *</td>
                <td><small>String</small>. Etiqueta del camp.</td>
                <td>
                  <b-input v-model="input.label" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany del camp.</td>
                <td>
                  <b-radio-values v-model="input.size" name="input-size" :values="['sm', 'md', 'lg']" />
                </td>
              </tr>
              <tr>
                <td>border</td>
                <td><small>String</small>. Estil del borde.</td>
                <td>
                  <b-radio-values v-model="input.border" name="input-border" :values="['default', 'muted', 'supermuted', 'outline']" />
                </td>
              </tr>
              <tr>
                <td>error</td>
                <td><small>String</small>. Text d'error.</td>
                <td>
                  <b-input v-model="input.error" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>block</td>
                <td><small>Bool</small>. El camp té amplada completa.</td>
                <td>
                  <b-radio-values v-model="input.block" name="input-block" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>no-label</td>
                <td><small>Bool</small>. Amaga l'etiqueta, però es manté per a lectors de pantalla.</td>
                <td>
                  <b-radio-values v-model="input.noLabel" name="input-block" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>label-on-top</td>
                <td><small>Bool</small>. En <em>float</em> força que l'etiqueta estiga sempre dalt.</td>
                <td>
                  <b-radio-values v-model="input.labelOnTop" name="input-label-on-top" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>focus-dark</td>
                <td><small>Bool</small>. Activar quan el botó cau sobre un fons taronja.</td>
                <td>
                  <b-radio-values v-model="input.focusDark" name="input-focus-dark" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><small>Bool</small>. Deshabilita el camp.</td>
                <td>
                  <b-radio-values v-model="input.disabled" name="input-disabled" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>span</td>
                <td>
                  <small>Number, Object</small>. Dins d'un <em>input-group</em>, estableix el número de columnes que ocupa el camp.
                </td>
                <td>
                  <b-radio-values v-model="input.span" name="input-span" :values="[1, 2, 3, 4]" />
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
              <div class="background">
                <b-input v-model="value" v-bind="input" />
              </div>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="input">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultInputProps = {
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
      input: this.copyObject(defaultInputProps),
      value: ''
    }
  },

  computed: {
    code () {
      return `<b-input${this.inputProps} />`
    },

    inputProps () {
      return this.inlineProps(this.input, defaultInputProps)
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  margin: -2rem;
  padding: 2rem;
  background: var(--gray-50);
  border-radius: 0 0 0.75rem 0.75rem;
}
</style>
