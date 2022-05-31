<template>
  <section class="docs">
    <h3 id="inputgroup">
      Grup de camps
    </h3>
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
                  <b-input v-model="inputGroup.title" type="text" size="sm" focus-dark />
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
      <div class="docs-col-preview" style="--card-min-height: 400px;">
        <div class="sticky">
          <flippable-card>
            <template #frontSide>
              <div class="background">
                <b-input-group :title="inputGroup.title">
                  <b-input
                    v-model="values.first_name"
                    variant="float"
                    label="Nom"
                    name="first_name"
                    span="2"
                  />
                  <b-input
                    v-model="values.last_name"
                    variant="float"
                    label="Cognoms"
                    name="last_name"
                    span="2"
                  />
                  <b-input
                    v-model="values.email"
                    type="email"
                    variant="float"
                    label="E-mail"
                    name="email"
                    span="4"
                  />
                </b-input-group>
              </div>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="inputGroup">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'
import docsMixin from '@/mixins/docsMixin.js'

const defaultInputGroupProps = {
  title: ''
}

export default {
  components: {
    BInputGroup
  },

  mixins: [docsMixin],

  data () {
    return {
      inputGroup: this.copyObject(defaultInputGroupProps),
      values: {
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  },

  computed: {
    code () {
      return `<b-input-group${this.inputGroupProps}>
  <b-input
    variant="float"
    label="Nom"
    name="first_name"
    span="2"
  />
  <b-input
    variant="float"
    label="Cognoms"
    name="last_name"
    span="2"
  />
  <b-input
    type="email"
    variant="float"
    label="E-mail"
    name="email"
    span="4"
  />
</b-input-group>`
    },

    inputGroupProps () {
      return this.inlineProps(this.inputGroup, defaultInputGroupProps)
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
