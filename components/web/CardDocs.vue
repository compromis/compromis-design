<template>
  <section class="docs">
    <h3 id="card">
      Targeta
    </h3>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h4><code>&lt;b-card&gt;</code></h4>
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
                <td><small>String</small>. Variant de la targeta</td>
                <td>
                  <b-radio-values v-model="card.variant" name="card-variant" :values="['default', 'outline', 'gradient', 'custom-color']" />
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td><small>String</small>. Canvia el color de la vora en <code>outline</code> i el fons en <code>gradient</code>, <code>custom-color</code>.</td>
                <td>
                  <b-input v-model="card.color" type="text" size="sm" focus-dark :disabled="card.variant === 'default'" />
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td><small>String</small>. Tamany de la targeta</td>
                <td>
                  <b-radio-values v-model="card.size" name="card-size" :values="['sm', 'md', 'lg', 'xl']" />
                </td>
              </tr>
              <tr>
                <td>shadow</td>
                <td>
                  <small>Bool</small>.
                  Afegeix sombra a la targeta
                  <code>Gradient</code>
                </td>
                <td>
                  <b-radio-values v-model="card.shadow" name="card-shadow" :values="[true, false]" :disable-all="card.variant === 'outline'" />
                </td>
              </tr>
              <tr>
                <td>padded</td>
                <td><small>Bool</small>. Afegeix espai entre la vora i el contingut</td>
                <td>
                  <b-radio-values v-model="card.padded" name="card-padded" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>rises</td>
                <td>
                  <small>Bool</small>.
                  Efecte on hover
                </td>
                <td>
                  <b-radio-values v-model="card.rises" name="card-rises" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>overflow-hidden</td>
                <td><small>Bool</small>. Amaga l'overflow</td>
                <td>
                  <b-radio-values v-model="card.overflowHidden" name="card-overflow" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>image</td>
                <td>
                  <small>String</small>.
                  Imatge de fons. Sols en
                  <code>gradient</code>
                  <code>custom-color</code>
                </td>
                <td>
                  <b-input v-model="card.image" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>to</td>
                <td><small>String</small>. Enllaç <code>&lt;nuxt-link&gt;</code></td>
                <td>
                  <b-input v-model="card.to" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>href</td>
                <td><small>String</small>. Enllaç <code>&lt;a&gt;</code></td>
                <td>
                  <b-input v-model="card.href" type="text" size="sm" focus-dark />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input v-model="card.as" type="text" size="sm" focus-dark />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>

        <h4><code>&lt;b-card-section&gt;</code></h4>
        <p>Secció de la targeta</p>
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
                <td>border-top</td>
                <td><small>Bool</small>. Vora superior</td>
                <td>
                  <b-radio-values v-model="cardSection.borderTop" name="card-border-top" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>border-bottom</td>
                <td><small>Bool</small>. Vora inferior</td>
                <td>
                  <b-radio-values v-model="cardSection.borderBottom" name="card-border-bottom" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>border-left</td>
                <td><small>Bool</small>. Vora esquerra</td>
                <td>
                  <b-radio-values v-model="cardSection.borderLeft" name="card-border-left" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>border-right</td>
                <td><small>Bool</small>. Vora dreta</td>
                <td>
                  <b-radio-values v-model="cardSection.borderRight" name="card-border-right" :values="[true, false]" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>

        <h4><code>&lt;b-card-list&gt;</code></h4>
        <p>Llistat dins d'una targeta. Afegeix línies divisòries entre els elements.</p>
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
                <td>padded</td>
                <td><small>Bool</small>. Afegeix espai entre la vora i el contingut</td>
                <td>
                  <b-radio-values v-model="cardList.padded" name="card-list-padded" :disable-all="cardList.menu" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>divisions</td>
                <td><small>Bool</small>. Afegeix línies divisòries entre els elements</td>
                <td>
                  <b-radio-values v-model="cardList.divisions" name="card-list-divisions" :disable-all="cardList.menu" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>block-links</td>
                <td><small>Bool</small>. Converteix els enllaços en blocs</td>
                <td>
                  <b-radio-values v-model="cardList.blockLinks" name="card-list-blocklinks" :disable-all="cardList.menu" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>menu</td>
                <td><small>Bool</small>. Activa <code>block-links</code> i desactiva <code>divisions</code> i <code>padded</code></td>
                <td>
                  <b-radio-values v-model="cardList.menu" name="card-list-menu" :values="[true, false]" />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input v-model="cardList.as" type="text" checked size="sm" />
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
              <b-card v-bind="card">
                <b-card-section v-bind="cardSection">
                  <h2>Títol</h2>
                </b-card-section>
                <img v-if="card.variant != 'gradient' && card.variant != 'custom-color'" style="height: 200px; object-fit: cover" :src="card.image">
                <b-card-section v-bind="cardSection">
                  Setze jutges d'un jutjat mengen fetge d'un penjat. Si el penjat es despenja, es menja els setze fetges dels jutges del jutjat que l'han penjat.
                </b-card-section>
                <b-card-list v-bind="cardList">
                  <li><a href="#">Enllaç 1</a></li>
                  <li><a href="#">Enllaç 2</a></li>
                </b-card-list>
              </b-card>
            </template>
            <template #backSide>
              <!-- eslint-disable -->
              <snippet :properties="[card, cardSection, cardList]">{{code}}</snippet>
            </template>
          </flippable-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import docsMixin from '@/mixins/docsMixin.js'

const defaultCardProps = {
  variant: 'default',
  size: 'md',
  shadow: true,
  padded: false,
  overflowHidden: false,
  rises: false,
  image: 'https://source.unsplash.com/random',
  color: '',
  to: '',
  href: '',
  as: ''
}

const defaultCardSectionProps = {
  borderTop: false,
  borderBottom: false,
  borderLeft: false,
  borderRight: false
}

const defaultCardListProps = {
  padded: true,
  divisions: true,
  blockLinks: false,
  menu: false,
  as: 'ul'
}

export default {
  mixins: [docsMixin],

  data () {
    return {
      card: this.copyObject(defaultCardProps),
      cardSection: this.copyObject(defaultCardSectionProps),
      cardList: this.copyObject(defaultCardListProps)
    }
  },

  computed: {
    code () {
      return `<b-card${this.cardProps}>
  <b-card-section${this.cardSectionProps}>
    <h2>Títol</h2>
  </b-card-section>
  <b-card-section${this.cardSectionProps}>
    Setze jutges d'un jutjat mengen fetge d'un penjat.
    Si el penjat es despenja, es menja els setze fetges
    dels jutges del jutjat que l'han penjat.
  </b-card-section>
  <b-card-list${this.cardListProps}>
    <li><a href="#">Enllaç 1</a></li>
    <li><a href="#">Enllaç 2</a></li>
  </b-card-list>
</b-card>`
    },

    cardProps () {
      return this.inlineProps(this.card, defaultCardProps)
    },

    cardSectionProps () {
      return this.inlineProps(this.cardSection, defaultCardSectionProps)
    },

    cardListProps () {
      return this.inlineProps(this.cardList, defaultCardListProps)
    }
  },

  watch: {
    'cardList.menu' (value) {
      if (value) {
        this.cardList.divisions = false
        this.cardList.padded = false
        this.cardList.blockLinks = true
      }
    }
  }
}
</script>
