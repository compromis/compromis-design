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
                <td><small>String</small>. Per defecte, agafa el color de text i fons del pare. <em>Muted</em> força l'escala del grissos al text.</td>
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
      <div class="docs-col-preview" style="--card-min-height: 300px;">
        <div class="sticky">
          <flippable-card>
            <template #frontSide>
              <div :class="['background', `footer-${footer.variant}`]" :style="{ background, color }">
                <b-footer v-bind="footer" />
              </div>
              <div v-if="footer.variant === 'default'" class="color-controls">
                <label>Color de fons <b-color-input v-model="background" class="color-input" /></label>
                <label>Color de text <b-color-input v-model="color" class="color-input" /></label>
              </div>
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
      footer: this.copyObject(defaultFooterProps),
      background: '#353949',
      color: '#ffffff'
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

<style lang="scss" scoped>
.background {
  margin: -2rem;
  padding: 2rem;
  border-radius: 0 0 0.75rem 0.75rem;

  &.footer-muted {
    background: var(--white) !important;
  }
}

.color-controls {
  display: flex;
  position: absolute;
  bottom: -50px;
  right: 0;
  gap: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
