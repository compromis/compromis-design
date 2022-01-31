<template>
  <section class="docs">
    <h3>Botó</h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-button&gt;</code></h4>
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
                <td><small>String</small>. Variant del botó</td>
                <td>
                  <b-radio-values v-model="button.variant" name="button-variant" :values="['default', 'inverted', 'white', 'black', 'muted', 'supermuted', 'primary', 'secondary']" />
                </td>
              </tr>
              <tr>
                <td>outline</td>
                <td><small>Bool</small>. Si el botó té vora.</td>
                <td>
                  <b-radio-values v-model="button.outline" name="button-outline" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany del botó.</td>
                <td>
                  <b-radio-values v-model="button.size" name="button-outline" :values="['sm', 'md', 'lg', 'xl']" />
                </td>
              </tr>
              <tr>
                <td>block</td>
                <td><small>Bool</small>. Botó al 100% de l'amplada del contenidor.</td>
                <td>
                  <b-radio-values v-model="button.block" name="button-block" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>shadow</td>
                <td><small>Bool</small>. Ombra del botó.</td>
                <td>
                  <b-radio-values v-model="button.shadow" name="button-shadow" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>focus-dark</td>
                <td><small>Bool</small>. Activar quan el botó cau sobre un fons taronja.</td>
                <td>
                  <b-radio-values v-model="button.focusDark" name="button-focus-dark" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><small>Bool</small>. Deshabilita el botó.</td>
                <td>
                  <b-radio-values v-model="button.disabled" name="button-disabled" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>to</td>
                <td><small>String</small>. Enllaç <code>&lt;nuxt-link&gt;</code></td>
                <td>
                  <b-input v-model="button.to" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>href</td>
                <td><small>String</small>. Enllaç <code>&lt;a&gt;</code></td>
                <td>
                  <b-input v-model="button.href" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input v-model="button.as" type="text" size="sm" focus-dark />
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
              <div class="offset">
                <b-card-section>
                  <input v-model="background" type="color">
                </b-card-section>
                <b-card-section :style="{ background }" class="background">
                  <b-button v-bind="button">
                    Text
                  </b-button>
                </b-card-section>
              </div>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="button">{{code}}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultButtonProps = {
  outline: false,
  variant: 'default',
  size: 'md',
  block: false,
  shadow: false,
  focusDark: false,
  disabled: false,
  to: '',
  href: '',
  as: ''
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      button: this.copyObject(defaultButtonProps),
      background: '#262934'
    }
  },

  computed: {
    code () {
      return `<b-button${this.buttonProps}>
  Text
</b-button>`
    },

    buttonProps () {
      return this.inlineProps(this.button, defaultButtonProps)
    }
  }
}
</script>

<style scoped>
.offset {
  margin: -2rem;
}

.background {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}
</style>
