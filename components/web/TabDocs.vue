<template>
  <section class="docs">
    <h3>Pastilles</h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-tab-list&gt;</code></h4>
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
                <td>outline</td>
                <td><small>Bool</small>. Si les pastilles tenen vora o no.</td>
                <td>
                  <b-radio-values v-model="tabList.outline" name="tab-list-outline" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>muted</td>
                <td><small>Bool</small>. Si les pastilles són gris o no.</td>
                <td>
                  <b-radio-values v-model="tabList.muted" name="tab-list-muted" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany de les pastiles.</td>
                <td>
                  <b-radio-values v-model="tabList.size" name="tab-list-size" :values="['sm', 'md', 'lg']" />
                </td>
              </tr>
              <tr>
                <td>focus-dark</td>
                <td><small>Bool</small>. Fa negre el contorn de l'estat focus de les pastilles</td>
                <td>
                  <b-radio-values v-model="tabList.focusDark" name="tab-list-focus-dark" :values="[true, false]" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
        <h4><code>&lt;b-tab&gt;</code></h4>
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
                <td>selected</td>
                <td><small>Bool</small>. Si la pastilla està seleccionada o no.</td>
                <td>
                  <b-radio-values name="tab-list-variant" :values="[true, false]" disable-all />
                </td>
              </tr>
              <tr>
                <td>to</td>
                <td><small>String</small>. Enllaç <code>&lt;nuxt-link&gt;</code></td>
                <td>
                  <b-input disabled type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>href</td>
                <td><small>String</small>. Enllaç <code>&lt;a&gt;</code></td>
                <td>
                  <b-input disabled type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input disabled type="text" size="sm" focus-dark />
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
                <b-card-section :style="{ background }" class="background">
                  <b-tab-list v-bind="tabList">
                    <b-tab
                      :selected="selectedTab === 1"
                      @click="selectedTab = 1"
                    >
                      Tab 1
                    </b-tab>
                    <b-tab
                      :selected="selectedTab === 2"
                      @click="selectedTab = 2"
                    >
                      Tab 2
                    </b-tab>
                    <b-tab
                      :selected="selectedTab === 3"
                      @click="selectedTab = 3"
                    >
                      Tab 3
                    </b-tab>
                  </b-tab-list>
                </b-card-section>
              </div>
              <b-color-input v-model="background" class="color-input" />
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="tabList">{{code}}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultTabListProps = {
  outline: false,
  muted: false,
  size: 'md',
  focusDark: false
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      tabList: this.copyObject(defaultTabListProps),
      background: '#262934',
      selectedTab: 1
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

    tabListProps () {
      return this.inlineProps(this.tabList, defaultTabListProps)
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

.color-input {
  position: absolute;
  bottom: -50px;
  right: 0;
}
</style>
