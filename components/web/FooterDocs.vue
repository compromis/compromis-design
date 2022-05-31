<template>
  <section class="docs">
    <h3 id="footer">
      Peu de pàgina
    </h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-footer&gt;</code></h4>
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
                <td><small>String</small>. Variant</td>
                <td>
                  <b-radio-values v-model="footer.variant" name="nav-collapseAt" :values="['default', 'muted']" />
                </td>
              </tr>
              <tr>
                <td>campaign</td>
                <td><small>Bool</small>. Nom de la campanya</td>
                <td>
                  <b-input v-model="footer.campaign" type="text" size="sm" />
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
              <b-footer v-bind="footer" />
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="[footer]">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
import docsMixin from '@/mixins/docsMixin.js'

const defaultFooterProps = {
  variant: 'default',
  campaign: ''
}

export default {
  components: {
    BFooter
  },

  mixins: [docsMixin],

  data () {
    return {
      footer: this.copyObject(defaultFooterProps)
    }
  },

  computed: {
    code () {
      return `<b-footer${this.footerProps}></b-footer>`
    },

    footerProps () {
      return this.inlineProps(this.footer, defaultFooterProps)
    }
  }
}
</script>
