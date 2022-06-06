<template>
  <section class="docs">
    <h3 id="pills">
      Pastilles
    </h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-pill&gt;</code> i <code>&lt;b-pill-list&gt;</code></h4>
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
                <td><small>String</small>. Variant de la pastillas</td>
                <td>
                  <b-radio-values v-model="pill.variant" name="pill-variant" :values="['default', 'muted', 'supermuted', 'to-primary', 'to-secondary']" />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany de la pastila.</td>
                <td>
                  <b-radio-values v-model="pill.size" name="pill-size" :values="['sm', 'md', 'lg']" />
                </td>
              </tr>
              <tr>
                <td>focus-dark</td>
                <td><small>Bool</small>. Fa negre el contorn de l'estat focus de la pastilla</td>
                <td>
                  <b-radio-values v-model="pill.focusDark" name="pill-focus-dark" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>to</td>
                <td><small>String</small>. Enllaç <code>&lt;nuxt-link&gt;</code></td>
                <td>
                  <b-input v-model="pill.to" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>href</td>
                <td><small>String</small>. Enllaç <code>&lt;a&gt;</code></td>
                <td>
                  <b-input v-model="pill.href" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input v-model="pill.as" type="text" size="sm" focus-dark />
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
                  <b-pill-list>
                    <b-pill v-bind="pill">
                      Pastilla 1
                    </b-pill>
                    <b-pill v-bind="pill">
                      Pastilla 2
                    </b-pill>
                    <b-pill v-bind="pill">
                      Pastilla 3
                    </b-pill>
                  </b-pill-list>
                </b-card-section>
              </div>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="pill">{{code}}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultPillProps = {
  variant: 'default',
  size: 'md',
  focusDark: false,
  to: '',
  href: '',
  as: 'span'
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      pill: this.copyObject(defaultPillProps)
    }
  },

  computed: {
    code () {
      return `<b-pill-list>
  <b-pill${this.pillProps}>
    Pastilla 1
  </b-pill>
  <b-pill${this.pillProps}>
    Pastilla 2
  </b-pill>
  <b-pill${this.pillProps}>
    Pastilla 3
  </b-pill>
</b-pill-list>`
    },

    pillProps () {
      return this.inlineProps(this.pill, defaultPillProps)
    }
  }
}
</script>
