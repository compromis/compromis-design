<template>
  <section class="docs">
    <h3>Navegació</h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-nav&gt;</code></h4>
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
                <td>collapse-at</td>
                <td><small>String</small>. Tamany al que el menú principal s'amaga i el logo es fa compacte</td>
                <td>
                  <b-radio-values v-model="nav.collapseAt" name="nav-collapseAt" :values="['sm', 'md', 'lg', 'xl']" />
                </td>
              </tr>
              <tr>
                <td>full-width</td>
                <td><small>Bool</small>. Elimina el contenidor</td>
                <td>
                  <b-radio-values v-model="nav.fullWidth" name="nav-full-width" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>menu-title</td>
                <td><small>String</small>. Text per a l'<code>aria-title</code> del menú principal</td>
                <td>
                  <b-input v-model="nav.menuTitle" type="text" size="sm" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>

        <h4>Slots</h4>
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
                <td>Main slot</td>
                <td>Contingut del menú principal</td>
                <td />
              </tr>
              <tr>
                <td>#basic-nav</td>
                <td>Elements del menú principal que no s'amaguen en mòbil</td>
                <td>
                  <b-input v-model="navSlots.basicNav" type="text" size="sm" />
                </td>
              </tr>
              <tr>
                <td>#logo-prepend</td>
                <td>Contingut davant del logo</td>
                <td>
                  <b-input v-model="navSlots.logoAppend" type="text" size="sm" />
                </td>
              </tr>
              <tr>
                <td>#logo-append</td>
                <td>Contingut després del logo</td>
                <td>
                  <b-input v-model="navSlots.logoPrepend" type="text" size="sm" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
      <div class="docs-col-preview">
        <div class="sticky">
          <flippable-card flipped>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="[nav]">{{ code }}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultNavProps = {
  collapseAt: 'lg',
  fullWidth: false,
  menuTitle: 'Menú principal'
}

const defaultNavSlots = {
  logoPrepend: '',
  logoAppend: '',
  basicNav: ''
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      nav: this.copyObject(defaultNavProps),
      navSlots: this.copyObject(defaultNavSlots)
    }
  },

  computed: {
    code () {
      return `<b-nav${this.navProps}>
  <b-nav-item to="/">Enllaç</b-nav-item>
  <b-nav-item to="/">Enllaç 2</b-nav-item>${this.logoAppendSlot}
</b-nav>`
    },

    navProps () {
      return this.inlineProps(this.nav, defaultNavProps)
    },

    logoAppendSlot () {
      let templates = ''
      const { navSlots } = this

      if (navSlots.logoPrepend) {
        templates += `

  <template #logo-prepend>${navSlots.logoPrepend}</template>`
      }

      if (navSlots.logoAppend) {
        templates += `

  <template #logo-append>${navSlots.logoAppend}</template>`
      }

      if (navSlots.basicNav) {
        templates += `

  <template #basic-nav>${navSlots.basicNav}</template>`
      }

      return templates
    }
  }
}
</script>
