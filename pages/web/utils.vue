<template>
  <div class="page-utils">
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
          <li class="bg-gradient gradient-feminista">
            .gradient-feminista .bg-gradient
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
          <li class="text-gradient gradient-feminista text-bold">
            .gradient-feminista .text-gradient
          </li>
        </b-card-list>
      </b-card>

      <h3>Tamanys de text</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.text-xs</td><td><pre>font-size: 0.75rem</pre></td></tr>
          <tr><td>.text-sm</td><td><pre>font-size: 0.875rem</pre></td></tr>
          <tr><td>.text-md</td><td><pre>font-size: 1rem</pre></td></tr>
          <tr><td>.text-lg</td><td><pre>font-size: 1.125rem</pre></td></tr>
          <tr><td>.text-xl</td><td><pre>font-size: 1.25rem</pre></td></tr>
          <tr><td>.text-2xl</td><td><pre>font-size: 1.666rem</pre></td></tr>
          <tr><td>.text-3xl</td><td><pre>font-size: 2.369rem</pre></td></tr>
          <tr><td>.text-4xl</td><td><pre>font-size: 3.157rem</pre></td></tr>
          <tr><td>.text-5xl</td><td><pre>font-size: 4.209rem</pre></td></tr>
          <tr><td>.text-6xl</td><td><pre>font-size: 5.653rem</pre></td></tr>
        </table>
      </b-card>

      <h3>Pesos de text</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr>
            <td class="text-bold">
              .text-bold
            </td><td><pre class="m-0">font-weight: 900</pre></td>
          </tr>
          <tr>
            <td class="text-regular">
              .text-regular
            </td><td><pre class="m-0">font-weight: 500</pre></td>
          </tr>
        </table>
      </b-card>

      <h3>Vores</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.border</td><td><pre>border: 1px solid --border-color</pre></td></tr>
          <tr><td>.border-top</td><td><pre>border-top: 1px solid --border-color</pre></td></tr>
          <tr><td>.border-bottom</td><td><pre>border-bottom: 1px solid --border-color</pre></td></tr>
          <tr><td>.border-right</td><td><pre>border-right: 1px solid --border-color</pre></td></tr>
          <tr><td>.border-left</td><td><pre>border-left: 1px solid --border-color</pre></td></tr>
        </table>
      </b-card>

      <h3>Color de les vores</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>--border-color</td><td>Color de la vora, p.e.: <pre>--border-color: red</pre></td></tr>
          <tr><td>.border-white</td><td>Fa <pre>--border-color</pre> blanc</td></tr>
          <tr><td>.border-black</td><td>Fa <pre>--border-color</pre> negre</td></tr>
          <tr><td>.border-outline</td><td>Fa <pre>--border-color</pre> gris</td></tr>
        </table>
      </b-card>

      <h3>Radi de les vores</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.rounded-xs</td><td><pre>border-radius: .5rem</pre></td></tr>
          <tr><td>.rounded-sm</td><td><pre>border-radius: .75rem</pre></td></tr>
          <tr><td>.rounded-md</td><td><pre>border-radius: 1rem</pre></td></tr>
          <tr><td>.rounded-lg</td><td><pre>border-radius: 1.5rem</pre></td></tr>
          <tr><td>.rounded-xl</td><td><pre>border-radius: 2rem</pre></td></tr>
        </table>
      </b-card>

      <h3>Ombres</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.shadow</td><td>Afegeix ombra</td></tr>
          <tr><td>.shadow-rises</td><td>Afegeix ombra en l'estat <pre>:hover</pre></td></tr>
        </table>
      </b-card>

      <h3>Enllaços</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.link-underlined</td><td><a href="" class="link-underlined">Enllaç subratllat</a></td></tr>
          <tr><td>.link-not-underlined</td><td><a href="" class="link-not-underlined">Enllaç no subratllat</a></td></tr>
        </table>
      </b-card>

      <h3>Enllaços en estat <pre>:hover</pre></h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.link-muted-to-black</td><td><a href="" class="link-muted-to-black">Enllaç gris amb <pre>:hover</pre> negre</a></td></tr>
          <tr><td>.link-muted-to-primary</td><td><a href="" class="link-muted-to-primary">Enllaç gris amb <pre>:hover</pre> taronja</a></td></tr>
          <tr><td>.link-default-to-primary</td><td><a href="" class="text-color link-default-to-primary">Enllaç color per defecte amb <pre>:hover</pre> taronja</a></td></tr>
          <tr><td>.link-default-to-gradient</td><td><a href="" class="text-color link-default-to-gradient">Enllaç color per defecte amb <pre>:hover</pre> degradat</a></td></tr>
          <tr><td>.link-to-underlined</td><td><a href="" class="link-to-underlined">Enllaç amb <pre>:hover</pre> subratllat</a></td></tr>
        </table>
      </b-card>

      <h3>Estats <pre>:focus</pre></h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.focus-primary</td><td><pre>:focus</pre> taronja</td></tr>
          <tr><td>.focus-primary-within</td><td><pre>:focus-within</pre> taronja</td></tr>
          <tr><td>.focus-dark</td><td><pre>:focus</pre> negre</td></tr>
          <tr><td>.focus-dark-within</td><td><pre>:focus-within</pre> negre</td></tr>
        </table>
      </b-card>

      <h3>Llistes</h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr><td>.list-reset</td><td>Elimina les propietats CSS per defecte de <pre>ul</pre></td></tr>
          <tr><td>.list-horizontal</td><td>Fa les llistes <pre>ul</pre> horitzontals</td></tr>
        </table>
      </b-card>

      <h3>Utilitats per a <pre>grid</pre></h3>
      <b-card type="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <tr v-for="n in 4" :key="n">
            <td>.span-{{ n }}</td><td><pre>grid-column: span {{ n }}</pre></td>
          </tr>
          <tr v-for="n in 4" :key="n">
            <td>.md-span-{{ n }}</td><td><pre>grid-column: span {{ n }}</pre> (només en dispositius <pre>md</pre>)</td>
          </tr>
          <tr v-for="n in 4" :key="n">
            <td>.sm-span-{{ n }}</td><td><pre>grid-column: span {{ n }}</pre> (només en dispositius <pre>sm</pre>)</td>
          </tr>
        </table>
      </b-card>

      <h3>Utilitats de <pre>bootstrap</pre></h3>
      A banda d'aquestes, el paquet Blobby hereta les <a href="https://getbootstrap.com/docs/5.1/utilities/">utilitats de bootstrap, consultables a la seua documentació</a>.
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page'
}
</script>

<style lang="scss">
.page-utils pre {
  margin-bottom: 0;
  display: inline;
  color: inherit;
  border: 1px solid var(--gray-200);
  border-radius: .5rem;
  padding: .2rem;
}

h3 pre {
  background: var(--gray-100);
  border-radius: .5rem;
  padding: .25rem;
}

.page-utils td:first-child {
  width: 30%;
}
</style>
