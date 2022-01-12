<template>
  <div class="page-utils docs">
    <h1>Utilitats</h1>
    <div class="col-xl-8">
      <h3>Color de fons</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <b-card-list>
          <li class="bg-color">
            .bg-color
          </li>
          <li class="bg-white">
            .bg-white
          </li>
          <li class="bg-black">
            .bg-black
          </li>
          <li class="bg-primary">
            .bg-primary
          </li>
          <li class="bg-muted">
            .bg-muted
          </li>
          <li class="bg-supermuted">
            .bg-supermuted
          </li>
          <li class="bg-gradient">
            .bg-gradient
          </li>
        </b-card-list>
      </b-card>

      <h3>Colors de text</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <b-card-list>
          <li class="text-color">
            .text-color
          </li>
          <li class="text-muted">
            .text-muted
          </li>
          <li class="text-white bg-black">
            .text-white
          </li>
          <li class="text-black">
            .text-black
          </li>
          <li class="text-primary">
            .text-primary
          </li>
          <li class="text-red">
            .text-red
          </li>
          <li class="text-green">
            .text-green
          </li>
          <li class="text-gradient">
            .text-gradient
          </li>
        </b-card-list>
      </b-card>

      <h3>Color de degradat</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <b-card-list>
          <li class="bg-gradient gradient-primary">
            .gradient-primary .bg-gradient
          </li>
          <li class="bg-gradient gradient-secondary">
            .gradient-secondary .bg-gradient
          </li>
          <li class="bg-gradient gradient-feminism">
            .gradient-feminism .bg-gradient
          </li>
        </b-card-list>
      </b-card>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <b-card-list>
          <li class="text-gradient gradient-primary text-bold">
            .gradient-primary .text-gradient
          </li>
          <li class="text-gradient gradient-secondary text-bold">
            .gradient-secondary .text-gradient
          </li>
          <li class="text-gradient gradient-feminism text-bold">
            .gradient-feminism .text-gradient
          </li>
        </b-card-list>
      </b-card>

      <p class="text-md mt-4">
        També pots definit un degradat personalitzat amb <code>--gradient-start</code> i <code>--gradient-end</code>
      </p>

      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <b-card-list>
          <li style="--gradient-start: var(--indigo); --gradient-end: var(--cyan);" class="bg-gradient">
            .bg-gradient <code>--gradient-start: var(--indigo)</code> <code>--gradient-end: var(--cyan)</code>
          </li>
          <li style="--gradient-start: var(--indigo); --gradient-end: var(--cyan);" class="text-gradient text-bold">
            .text-gradient <code>--gradient-start: var(--indigo)</code> <code>--gradient-end: var(--cyan)</code>
          </li>
        </b-card-list>
      </b-card>

      <h3>Tamanys de text</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.text-xs</td><td><code>font-size: 0.75rem</code></td></tr>
          <tr><td>.text-sm</td><td><code>font-size: 0.875rem</code></td></tr>
          <tr><td>.text-md</td><td><code>font-size: 1rem</code></td></tr>
          <tr><td>.text-lg</td><td><code>font-size: 1.125rem</code></td></tr>
          <tr><td>.text-xl</td><td><code>font-size: 1.25rem</code></td></tr>
          <tr><td>.text-2xl</td><td><code>font-size: 1.666rem</code></td></tr>
          <tr><td>.text-3xl</td><td><code>font-size: 2.369rem</code></td></tr>
          <tr><td>.text-4xl</td><td><code>font-size: 3.157rem</code></td></tr>
          <tr><td>.text-5xl</td><td><code>font-size: 4.209rem</code></td></tr>
          <tr><td>.text-6xl</td><td><code>font-size: 5.653rem</code></td></tr>
        </table>
      </b-card>

      <h3>Pesos de text</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr>
            <td class="text-bold">
              .text-bold
            </td><td><code class="m-0">font-weight: 900</code></td>
          </tr>
          <tr>
            <td class="text-regular">
              .text-regular
            </td><td><code class="m-0">font-weight: 500</code></td>
          </tr>
        </table>
      </b-card>

      <h3>Vores</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.border</td><td><code>border: 1px solid --border-color</code></td></tr>
          <tr><td>.border-top</td><td><code>border-top: 1px solid --border-color</code></td></tr>
          <tr><td>.border-bottom</td><td><code>border-bottom: 1px solid --border-color</code></td></tr>
          <tr><td>.border-right</td><td><code>border-right: 1px solid --border-color</code></td></tr>
          <tr><td>.border-left</td><td><code>border-left: 1px solid --border-color</code></td></tr>
        </table>
      </b-card>

      <h3>Color de les vores</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>--border-color</td><td>Color de la vora, p.e.: <code>--border-color: red</code></td></tr>
          <tr><td>.border-white</td><td>Fa <code>--border-color</code> blanc</td></tr>
          <tr><td>.border-black</td><td>Fa <code>--border-color</code> negre</td></tr>
          <tr><td>.border-outline</td><td>Fa <code>--border-color</code> gris</td></tr>
        </table>
      </b-card>

      <h3>Radi de les vores</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.rounded-xs</td><td><code>border-radius: .5rem</code></td></tr>
          <tr><td>.rounded-sm</td><td><code>border-radius: .75rem</code></td></tr>
          <tr><td>.rounded-md</td><td><code>border-radius: 1rem</code></td></tr>
          <tr><td>.rounded-lg</td><td><code>border-radius: 1.5rem</code></td></tr>
          <tr><td>.rounded-xl</td><td><code>border-radius: 2rem</code></td></tr>
        </table>
      </b-card>

      <h3>Ombres</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.shadow</td><td>Afegeix ombra</td></tr>
          <tr><td>.shadow-rises</td><td>Afegeix ombra en l'estat <code>:hover</code></td></tr>
        </table>
      </b-card>

      <h3>Enllaços</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.link-underlined</td><td><a href="" class="link-underlined">Enllaç subratllat</a></td></tr>
          <tr><td>.link-not-underlined</td><td><a href="" class="link-not-underlined">Enllaç no subratllat</a></td></tr>
        </table>
      </b-card>

      <h3>Enllaços en estat <code>:hover</code></h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.link-muted-to-black</td><td><a href="" class="link-muted-to-black">Enllaç gris amb <code>:hover</code> negre</a></td></tr>
          <tr><td>.link-muted-to-primary</td><td><a href="" class="link-muted-to-primary">Enllaç gris amb <code>:hover</code> taronja</a></td></tr>
          <tr><td>.link-default-to-primary</td><td><a href="" class="text-color link-default-to-primary">Enllaç color per defecte amb <code>:hover</code> taronja</a></td></tr>
          <tr><td>.link-default-to-gradient</td><td><a href="" class="text-color link-default-to-gradient">Enllaç color per defecte amb <code>:hover</code> degradat</a></td></tr>
          <tr><td>.link-to-underlined</td><td><a href="" class="link-to-underlined">Enllaç amb <code>:hover</code> subratllat</a></td></tr>
        </table>
      </b-card>

      <h3>Estats <code>:focus</code></h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.focus-primary</td><td><code>:focus</code> taronja</td></tr>
          <tr><td>.focus-primary-within</td><td><code>:focus-within</code> taronja</td></tr>
          <tr><td>.focus-dark</td><td><code>:focus</code> negre</td></tr>
          <tr><td>.focus-dark-within</td><td><code>:focus-within</code> negre</td></tr>
        </table>
      </b-card>

      <h3>Llistes</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.list-reset</td><td>Elimina les propietats CSS per defecte de <code>ul</code></td></tr>
          <tr><td>.list-horizontal</td><td>Fa les llistes <code>ul</code> horitzontals</td></tr>
        </table>
      </b-card>

      <h3>Utilitats per a <code>grid</code></h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr v-for="n in 4" :key="n">
            <td>.span-{{ n }}</td><td><code>grid-column: span {{ n }}</code></td>
          </tr>
          <tr v-for="n in 4" :key="n">
            <td>.md-span-{{ n }}</td><td><code>grid-column: span {{ n }}</code> (només en dispositius <code>md</code>)</td>
          </tr>
          <tr v-for="n in 4" :key="n">
            <td>.sm-span-{{ n }}</td><td><code>grid-column: span {{ n }}</code> (només en dispositius <code>sm</code>)</td>
          </tr>
        </table>
      </b-card>

      <h3>Utilitats de <code>bootstrap</code></h3>
      <p>A banda d'aquestes, el paquet Blobby hereta les <a href="https://getbootstrap.com/docs/5.1/utilities/">utilitats de Bootstrap</a>, consultables a la seua documentació.</p>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page'
}
</script>

<style lang="scss">
.page-utils td:first-child {
  width: 30%;
}
</style>
