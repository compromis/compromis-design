<template>
  <section class="docs">
    <h2>Card</h2>
    <div class="docs-cols">
      <div class="docs-col-schema">
        <h3><code>&lt;b-card&gt;</code></h3>
        <b-card type="outline" size="sm" overflow-hidden>
          <table class="table tint-alternate-rows vertical-divisions">
            <colgroup>
              <col width="20%">
              <col width="20%">
              <col width="30%">
              <col width="30%">
            </colgroup>
            <thead>
              <tr>
                <th>nom</th>
                <th>valors</th>
                <th>descripció</th>
                <th>play</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td class="lh-lg">
                  <code class="default">shadow</code>,
                  <code>solid</code>,
                  <code>outline</code>,
                  <code>gradient</code>
                </td>
                <td><small>String</small>. Tipus de targeta</td>
                <td>
                  <b-select v-model="card.type" size="sm">
                    <option>shadow</option>
                    <option>solid</option>
                    <option>outline</option>
                    <option>gradient</option>
                  </b-select>
                </td>
              </tr>
              <tr>
                <td>variant</td>
                <td class="lh-lg">
                  <code class="default">default</code>,
                  <code>white</code>,
                  <code>black</code>,
                  <code>primary</code>
                  <b-badge variant="supermuted" size="sm">
                    Gradient
                  </b-badge>,
                  <code>secondary</code>
                  <b-badge variant="supermuted" size="sm">
                    Gradient
                  </b-badge>
                </td>
                <td><small>String</small>. Variant de la targeta</td>
                <td>
                  <b-select v-model="card.variant" size="sm">
                    <option>default</option>
                    <option>white</option>
                    <option>black</option>
                    <option>primary</option>
                    <option>secondary</option>
                  </b-select>
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td class="lh-lg">
                  <code>sm</code>, <code class="default">md</code>, <code>lg</code>, <code>xl</code>
                </td>
                <td><small>String</small>. Tamany de la targeta</td>
                <td>
                  <b-select v-model="card.size" size="sm">
                    <option>sm</option>
                    <option>md</option>
                    <option>lg</option>
                    <option>xl</option>
                  </b-select>
                </td>
              </tr>
              <tr>
                <td>glowy</td>
                <td class="lh-lg">
                  <code class="default">true</code>, <code>false</code>
                </td>
                <td>
                  <small>Bool</small>.
                  Afegeix glow a la targeta
                  <b-badge variant="supermuted" size="sm">
                    Gradient
                  </b-badge>
                </td>
                <td>
                  <b-checkbox v-model="card.glowy" />
                </td>
              </tr>
              <tr>
                <td>padded</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Afegeix espai entre la vora i el contingut</td>
                <td>
                  <b-checkbox v-model="card.padded" />
                </td>
              </tr>
              <tr>
                <td>rises</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td>
                  <small>Bool</small>.
                  Efecte on hover
                  <b-badge variant="supermuted" size="sm">
                    Shadow-only
                  </b-badge>
                </td>
                <td>
                  <b-checkbox v-model="card.rises" />
                </td>
              </tr>
              <tr>
                <td>overflow-hidden</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Amaga l'overflow</td>
                <td>
                  <b-checkbox v-model="card.overflowHidden" />
                </td>
              </tr>
              <tr>
                <td>image</td>
                <td />
                <td>
                  <small>String</small>.
                  Imatge de fons
                  <b-badge variant="supermuted" size="sm">
                    Gradient
                  </b-badge>
                  <b-badge variant="supermuted" size="sm">
                    Solid
                  </b-badge>
                </td>
                <td>
                  <b-input v-model="card.image" type="text" size="sm" />
                </td>
              </tr>
              <tr>
                <td>to</td>
                <td />
                <td><small>String</small>. Enllaç <code>&lt;nuxt-link&gt;</code></td>
                <td>
                  <b-input v-model="card.to" type="text" size="sm" />
                </td>
              </tr>
              <tr>
                <td>href</td>
                <td />
                <td><small>String</small>. Enllaç <code>&lt;a&gt;</code></td>
                <td>
                  <b-input v-model="card.href" type="text" size="sm" />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td />
                <td><small>String</small>. Tag HTML</td>
                <td>
                  <b-input v-model="card.as" type="text" size="sm" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>

        <h3><code>&lt;b-card-section&gt;</code></h3>
        <p>Secció de la targeta</p>
        <b-card type="outline" size="sm" overflow-hidden>
          <table class="table tint-alternate-rows vertical-divisions">
            <colgroup>
              <col width="20%">
              <col width="20%">
              <col width="30%">
              <col width="30%">
            </colgroup>
            <thead>
              <tr>
                <th>nom</th>
                <th>valors</th>
                <th>descripció</th>
                <th>play</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>border-top</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Vora superior</td>
                <td>
                  <b-checkbox v-model="cardSection.borderTop" />
                </td>
              </tr>
              <tr>
                <td>border-bottom</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Vora inferior</td>
                <td>
                  <b-checkbox v-model="cardSection.borderBottom" />
                </td>
              </tr>
              <tr>
                <td>border-left</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Vora esquerra</td>
                <td>
                  <b-checkbox v-model="cardSection.borderLeft" />
                </td>
              </tr>
              <tr>
                <td>border-right</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Vora dreta</td>
                <td>
                  <b-checkbox v-model="cardSection.borderRight" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>

        <h3><code>&lt;b-card-list&gt;</code></h3>
        <p>Llistat dins d'una targeta. Afegeix línies divisòries entre els elements.</p>
        <b-card type="outline" size="sm" overflow-hidden>
          <table class="table tint-alternate-rows vertical-divisions">
            <colgroup>
              <col width="20%">
              <col width="20%">
              <col width="30%">
              <col width="30%">
            </colgroup>
            <thead>
              <tr>
                <th>nom</th>
                <th>valors</th>
                <th>descripció</th>
                <th>play</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>padded</td>
                <td class="lh-lg">
                  <code class="default">true</code>, <code>false</code>
                </td>
                <td><small>Bool</small>. Afegeix espai entre la vora i el contingut</td>
                <td>
                  <b-checkbox v-model="cardList.padded" />
                </td>
              </tr>
              <tr>
                <td>divisions</td>
                <td class="lh-lg">
                  <code class="default">true</code>, <code>false</code>
                </td>
                <td><small>Bool</small>. Afegeix línies divisòries entre els elements</td>
                <td>
                  <b-checkbox v-model="cardList.divisions" />
                </td>
              </tr>
              <tr>
                <td>block-links</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Converteix els enllaços en blocs</td>
                <td>
                  <b-checkbox v-model="cardList.blockLinks" />
                </td>
              </tr>
              <tr>
                <td>menu</td>
                <td class="lh-lg">
                  <code>true</code>, <code class="default">false</code>
                </td>
                <td><small>Bool</small>. Activa <code>block-links</code> i desactiva <code>divisions</code> i <code>padded</code></td>
                <td>
                  <b-checkbox v-model="cardList.menu" />
                </td>
              </tr>
              <tr>
                <td>as</td>
                <td />
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
                <img v-if="card.type != 'gradient'" style="height: 200px; object-fit: cover" :src="card.image">
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
import FlippableCard from '@/components/web/FlippableCard'
import Snippet from '@/components/web/Snippet'
import inlinePropsMixin from '@/mixins/inlinePropsMixin.js'

const defaultCardProps = {
  type: 'shadow',
  variant: 'default',
  size: 'md',
  glowy: true,
  padded: false,
  overflowHidden: false,
  rises: false,
  image: 'https://source.unsplash.com/random',
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
  components: {
    Snippet,
    FlippableCard
  },

  mixins: [inlinePropsMixin],

  data () {
    return {
      card: JSON.parse(JSON.stringify(defaultCardProps)),
      cardSection: JSON.parse(JSON.stringify(defaultCardSectionProps)),
      cardList: JSON.parse(JSON.stringify(defaultCardListProps))
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
  }
}
</script>
