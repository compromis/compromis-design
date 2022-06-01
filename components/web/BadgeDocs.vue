<template>
  <section class="docs">
    <h3>Insígnies</h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-badge&gt;</code> i <code>&lt;b-badge-list&gt;</code></h4>
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
                <td><small>String</small>. Variant de la insíginia</td>
                <td>
                  <b-radio-values v-model="badge.variant" name="badge-variant" :values="['default', 'inverted', 'muted', 'supermuted', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']" />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany de la insígnia.</td>
                <td>
                  <b-radio-values v-model="badge.size" name="badge-size" :values="['sm', 'md', 'lg']" />
                </td>
              </tr>
              <tr>
                <td>outline</td>
                <td><small>Bool</small>. Si la insígnia està tota plena o només el contorn</td>
                <td>
                  <b-radio-values v-model="badge.outline" name="badge-outline" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>to</td>
                <td><small>String</small>. Enllaç <code>&lt;nuxt-link&gt;</code></td>
                <td>
                  <b-input v-model="badge.to" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>href</td>
                <td><small>String</small>. Enllaç <code>&lt;a&gt;</code></td>
                <td>
                  <b-input v-model="badge.href" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input v-model="badge.as" type="text" size="sm" focus-dark />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
      <div class="docs-col-preview">
        <div class="sticky">
          <flippable-card card-edge :class="`badge-${badge.variant}`">
            <template #frontSide>
              <b-badge-list>
                <b-badge v-bind="badge">
                  Insígnia 1
                </b-badge>
                <b-badge v-bind="badge">
                  Insígnia 2
                </b-badge>
                <b-badge v-bind="badge">
                  Insígnia 3
                </b-badge>
              </b-badge-list>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="badge">{{code}}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultBadgeProps = {
  variant: 'default',
  size: 'md',
  outline: false,
  to: '',
  href: '',
  as: 'span'
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      badge: this.copyObject(defaultBadgeProps)
    }
  },

  computed: {
    code () {
      return `<b-badge-list>
  <b-badge${this.badgeProps}>
    Insígnia 1
  </b-badge>
  <b-badge${this.badgeProps}>
    Insígnia 2
  </b-badge>
  <b-badge${this.badgeProps}>
    Insígnia 3
  </b-badge>
</b-badge-list>`
    },

    badgeProps () {
      return this.inlineProps(this.badge, defaultBadgeProps)
    }
  }
}
</script>

<style scoped lang="scss">
.badge-default {
  --card-background: var(--gray-50);
}
</style>
