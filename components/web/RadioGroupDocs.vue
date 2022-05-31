<template>
  <section class="docs">
    <h3>Grup de camps</h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-input-group&gt;</code></h4>
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
                <td>title</td>
                <td><small>String</small>. Títol del grup</td>
                <td>
                  <b-input v-model="radioGroup.title" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>card</td>
                <td colspan="2">
                  <small>Object</small>. Props de la b-card.
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
              <div class="background">
                <b-radio-group v-bind="radioGroup">
                  <b-radio v-model="value" name="option2" default-value="un" card>
                    Un
                  </b-radio>
                  <b-radio v-model="value" name="option2" default-value="dos" card>
                    Dos
                  </b-radio>
                  <b-radio v-model="value" name="option2" default-value="tres" card>
                    Tres
                  </b-radio>
                </b-radio-group>
              </div>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="radioGroup">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BRadioGroup from '@compromis/blobby/components/inputs/BRadioGroup.vue'
import docsMixin from '@/mixins/docsMixin.js'

const defaultRadioGroupProps = {
  title: '',
  titleHidden: false
}

export default {
  components: {
    BRadioGroup
  },

  mixins: [docsMixin],

  data () {
    return {
      radioGroup: this.copyObject(defaultRadioGroupProps),
      value: 'un'
    }
  },

  computed: {
    code () {
      return `<b-radio-group${this.radioGroupProps}>
  <b-radio name="option" value="un" card>
    Un
  </b-radio>
  <b-radio name="option" value="dos" card>
    Dos
  </b-radio>
  <b-radio name="option" value="tres" card>
    Tres
  </b-radio>
</b-radio-group>`
    },

    radioGroupProps () {
      return this.inlineProps(this.radioGroup, defaultRadioGroupProps)
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
