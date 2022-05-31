<template>
  <div class="page-utils docs">
    <h1>Utilitats</h1>
    <h2 id="css">
      Classes CSS
    </h2>
    <div class="col-xl-8">
      <h3>Color de fons</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
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
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
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
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
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
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
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

      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
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
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
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
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
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
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.border</td><td><code>border: 1px solid --border-color</code></td></tr>
          <tr><td>.border-top</td><td><code>border-top: 1px solid --border-color</code></td></tr>
          <tr><td>.border-bottom</td><td><code>border-bottom: 1px solid --border-color</code></td></tr>
          <tr><td>.border-right</td><td><code>border-right: 1px solid --border-color</code></td></tr>
          <tr><td>.border-left</td><td><code>border-left: 1px solid --border-color</code></td></tr>
        </table>
      </b-card>

      <h3>Color de les vores</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>--border-color</td><td>Color de la vora, p.e.: <code>--border-color: red</code></td></tr>
          <tr><td>.border-white</td><td>Fa <code>--border-color</code> blanc</td></tr>
          <tr><td>.border-black</td><td>Fa <code>--border-color</code> negre</td></tr>
          <tr><td>.border-outline</td><td>Fa <code>--border-color</code> gris</td></tr>
        </table>
      </b-card>

      <h3>Radi de les vores</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.rounded-xs</td><td><code>border-radius: .5rem</code></td></tr>
          <tr><td>.rounded-sm</td><td><code>border-radius: .75rem</code></td></tr>
          <tr><td>.rounded-md</td><td><code>border-radius: 1rem</code></td></tr>
          <tr><td>.rounded-lg</td><td><code>border-radius: 1.5rem</code></td></tr>
          <tr><td>.rounded-xl</td><td><code>border-radius: 2rem</code></td></tr>
        </table>
      </b-card>

      <h3>Ombres</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.shadow</td><td>Afegeix ombra</td></tr>
          <tr><td>.shadow-rises</td><td>Afegeix ombra en l'estat <code>:hover</code></td></tr>
        </table>
      </b-card>

      <h3>Enllaços</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.link-underlined</td><td><a href="" class="link-underlined">Enllaç subratllat</a></td></tr>
          <tr><td>.link-not-underlined</td><td><a href="" class="link-not-underlined">Enllaç no subratllat</a></td></tr>
        </table>
      </b-card>

      <h3>Enllaços en estat <code>:hover</code></h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.link-muted-to-black</td><td><a href="" class="link-muted-to-black">Enllaç gris amb <code>:hover</code> negre</a></td></tr>
          <tr><td>.link-muted-to-primary</td><td><a href="" class="link-muted-to-primary">Enllaç gris amb <code>:hover</code> taronja</a></td></tr>
          <tr><td>.link-default-to-primary</td><td><a href="" class="text-color link-default-to-primary">Enllaç color per defecte amb <code>:hover</code> taronja</a></td></tr>
          <tr><td>.link-default-to-gradient</td><td><a href="" class="text-color link-default-to-gradient">Enllaç color per defecte amb <code>:hover</code> degradat</a></td></tr>
          <tr><td>.link-to-underlined</td><td><a href="" class="link-to-underlined">Enllaç amb <code>:hover</code> subratllat</a></td></tr>
        </table>
      </b-card>

      <h3>Estats <code>:focus</code></h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.focus-primary</td><td><code>:focus</code> taronja</td></tr>
          <tr><td>.focus-primary-within</td><td><code>:focus-within</code> taronja</td></tr>
          <tr><td>.focus-dark</td><td><code>:focus</code> negre</td></tr>
          <tr><td>.focus-dark-within</td><td><code>:focus-within</code> negre</td></tr>
        </table>
      </b-card>

      <h3>Llistes</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td>.list-reset</td><td>Elimina les propietats CSS per defecte de <code>ul</code></td></tr>
          <tr><td>.list-horizontal</td><td>Fa les llistes <code>ul</code> horitzontals</td></tr>
        </table>
      </b-card>

      <h3>Utilitats per a <code>grid</code></h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr v-for="n in 4" :key="`span-${n}`">
            <td>.span-{{ n }}</td><td><code>grid-column: span {{ n }}</code></td>
          </tr>
          <tr v-for="n in 4" :key="`md-span-${n}`">
            <td>.md-span-{{ n }}</td><td><code>grid-column: span {{ n }}</code> (només en dispositius <code>md</code>)</td>
          </tr>
          <tr v-for="n in 4" :key="`sm-pan-${n}`">
            <td>.sm-span-{{ n }}</td><td><code>grid-column: span {{ n }}</code> (només en dispositius <code>sm</code>)</td>
          </tr>
        </table>
      </b-card>

      <h3>Utilitats de <code>bootstrap</code></h3>
      <p>A banda d'aquestes, el paquet Blobby hereta les <a href="https://getbootstrap.com/docs/5.1/utilities/">utilitats de Bootstrap</a>, consultables a la seua documentació.</p>.

      <h2 id="variables">
        Variables
      </h2>
      <h3>Colors de la marca</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions">
          <colgroup>
            <col style="width:43%">
            <col style="width:43%">
            <col style="width:14%">
          </colgroup>
          <tr class="text-white" style="background: var(--primary)">
            <td><code>--primary</code></td><td><code>$primary</code></td><td><code>#ff6720</code></td>
          </tr>
          <tr class="text-white" style="background: var(--black)">
            <td><code>--black</code></td><td><code>$black</code></td><td><code>#353949</code></td>
          </tr>
          <tr style="background: var(--white)">
            <td><code>--white</code></td><td><code>$white</code></td><td><code>#fff</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gradient-primary-start)">
            <td><code>--gradient-primary-start</code></td><td><code>$gradient-primary-start</code></td><td><code>#d23517</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gradient-primary-end)">
            <td><code>--gradient-primary-end</code></td><td><code>$gradient-primary-end</code></td><td><code>#f39128</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gradient-secondary-start)">
            <td><code>--gradient-secondary-start</code></td><td><code>$gradient-secondary-start</code></td><td><code>#38b34a</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gradient-secondary-end)">
            <td><code>--gradient-secondary-end</code></td><td><code>$gradient-secondary-end</code></td><td><code>#8cc949</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gradient-feminism-start)">
            <td><code>--gradient-feminism-start</code></td><td><code>$gradient-feminism-start</code></td><td><code>#7d3a81</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gradient-feminism-end)">
            <td><code>--gradient-feminism-end</code></td><td><code>$gradient-feminism-end</code></td><td><code>#c54687</code></td>
          </tr>
          <tr class="text-white" style="background: var(--mes)">
            <td><code>--mes</code></td><td><code>$mes</code></td><td><code>#f95a32</code></td>
          </tr>
          <tr class="text-white" style="background: var(--iniciativa)">
            <td><code>--iniciativa</code></td><td><code>$iniciativa</code></td><td><code>#ad283f</code></td>
          </tr>
          <tr class="text-white" style="background: var(--verds)">
            <td><code>--verds</code></td><td><code>$verds</code></td><td><code>#5ab552</code></td>
          </tr>
        </table>
      </b-card>
      <h3>Escala de grisos</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions">
          <colgroup>
            <col style="width:43%">
            <col style="width:43%">
            <col style="width:14%">
          </colgroup>
          <tr style="background: var(--gray-50)">
            <td><code>--gray-50</code></td><td><code>$gray-50</code></td><td><code>#f8faff</code></td>
          </tr>
          <tr style="background: var(--gray-100)">
            <td><code>--gray-100</code></td><td><code>$gray-100</code></td><td><code>#eef0f6</code></td>
          </tr>
          <tr style="background: var(--gray-200)">
            <td><code>--gray-200</code></td><td><code>$gray-200</code></td><td><code>#e5e7ed</code></td>
          </tr>
          <tr style="background: var(--gray-300)">
            <td><code>--gray-300</code></td><td><code>$gray-300</code></td><td><code>#d1d3db</code></td>
          </tr>
          <tr style="background: var(--gray-400)">
            <td><code>--gray-400</code></td><td><code>$gray-400</code></td><td><code>#bec0c8</code></td>
          </tr>
          <tr style="background: var(--gray-500)">
            <td><code>--gray-500</code></td><td><code>$gray-500</code></td><td><code>#aaadb6</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gray-600)">
            <td><code>--gray-600</code></td><td><code>$gray-600</code></td><td><code>#979aa4</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gray-700)">
            <td><code>--gray-700</code></td><td><code>$gray-700</code></td><td><code>#707380</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gray-800)">
            <td><code>--gray-800</code></td><td><code>$gray-800</code></td><td><code>#414554</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gray-900)">
            <td><code>--gray-900</code></td><td><code>$gray-900</code></td><td><code>#353949</code></td>
          </tr>
          <tr class="text-white" style="background: var(--gray-1000)">
            <td><code>--gray-1000:</code></td><td><code>$gray-1000</code></td><td><code>#262934</code></td>
          </tr>
        </table>
      </b-card>
      <h3>Arc de Sant Martí</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4 text-white">
        <table class="table vertical-divisions">
          <colgroup>
            <col style="width:43%">
            <col style="width:43%">
            <col style="width:14%">
          </colgroup>
          <tr style="background: var(--yellow)">
            <td><code>--yellow</code></td><td><code>$yellow</code></td><td><code>#ffd10f</code></td>
          </tr>
          <tr style="background: var(--orange)">
            <td><code>--orange</code></td><td><code>$orange</code></td><td><code>#f79226</code></td>
          </tr>
          <tr style="background: var(--red)">
            <td><code>--red</code></td><td><code>$red</code></td><td><code>#ef404d</code></td>
          </tr>
          <tr style="background: var(--purple)">
            <td><code>--purple</code></td><td><code>$purple</code></td><td><code>#a14a9c</code></td>
          </tr>
          <tr style="background: var(--blue)">
            <td><code>--blue</code></td><td><code>$blue</code></td><td><code>#55a4db</code></td>
          </tr>
          <tr style="background: var(--green)">
            <td><code>--green</code></td><td><code>$green</code></td><td><code>#7fc347</code></td>
          </tr>
          <tr style="background: var(--indigo)">
            <td><code>--indigo</code></td><td><code>$indigo</code></td><td><code>#6610f2</code></td>
          </tr>
          <tr style="background: var(--pink)">
            <td><code>--pink</code></td><td><code>$pink</code></td><td><code>#d63384</code></td>
          </tr>
          <tr style="background: var(--teal)">
            <td><code>--teal</code></td><td><code>$teal</code></td><td><code>#20c997</code></td>
          </tr>
          <tr style="background: var(--cyan)">
            <td><code>--cyan</code></td><td><code>$cyan</code></td><td><code>#2dc7e6</code></td>
          </tr>
        </table>
      </b-card>
      <h3>Xarxes Socials</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4 text-white">
        <table class="table vertical-divisions">
          <colgroup>
            <col style="width:43%">
            <col style="width:43%">
            <col style="width:14%">
          </colgroup>
          <tr style="background: var(--facebook)">
            <td><code>--facebook</code></td><td><code>$facebook</code></td><td><code>#3b5998</code></td>
          </tr>
          <tr style="background: var(--twitter)">
            <td><code>--twitter</code></td><td><code>$twitter</code></td><td><code>#00acee</code></td>
          </tr>
          <tr style="background: var(--instagram)">
            <td><code>--instagram</code></td><td><code>$instagram</code></td><td><code>#e1306c</code></td>
          </tr>
          <tr style="background: var(--youtube)">
            <td><code>--youtube</code></td><td><code>$youtube</code></td><td><code>#ff0800</code></td>
          </tr>
          <tr style="background: var(--telegram)">
            <td><code>--telegram</code></td><td><code>$telegram</code></td><td><code>#08c</code></td>
          </tr>
          <tr style="background: var(--tiktok)">
            <td><code>--tiktok</code></td><td><code>$tiktok</code></td><td><code>#000</code></td>
          </tr>
          <tr style="background: var(--twitch)">
            <td><code>--twitch</code></td><td><code>$twitch</code></td><td><code>#772ce8</code></td>
          </tr>
          <tr style="background: var(--whatsapp)">
            <td><code>--whatsapp</code></td><td><code>$whatsapp</code></td><td><code>#25d366</code></td>
          </tr>
        </table>
      </b-card>

      <h3>Interfície d'usuari</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr>
            <td><code>$body-bg</code></td><td><code>$gray-50</code></td>
          </tr>
          <tr>
            <td><code>$text-color</code></td><td><code>$black</code></td>
          </tr>
          <tr>
            <td><code>$text-muted</code></td><td><code>$gray-700</code></td>
          </tr>
          <tr>
            <td><code>$link-color</code></td><td><code>$primary</code></td>
          </tr>
          <tr>
            <td><code>$link-color-hover</code></td><td><code>$primary</code></td>
          </tr>
          <tr>
            <td><code>$link-decoration</code></td><td><code>none</code></td>
          </tr>
          <tr>
            <td><code>$link-decoration-hover</code></td><td><code>underline</code></td>
          </tr>
        </table>
      </b-card>

      <h3>Tipografia</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <td><code>$font-family-sans-serif</code></td><td><code>'Manrope', sans-serif;</code></td>
        </table>
      </b-card>
      <h3>Tamanys de lletra</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions tint-alternate-rows">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td><code>$text-xs</code></td><td><code>font-size: 0.75rem</code></td></tr>
          <tr><td><code>$text-sm</code></td><td><code>font-size: 0.875rem</code></td></tr>
          <tr><td><code>$text-md</code></td><td><code>font-size: 1rem</code></td></tr>
          <tr><td><code>$text-lg</code></td><td><code>font-size: 1.125rem</code></td></tr>
          <tr><td><code>$text-xl</code></td><td><code>font-size: 1.25rem</code></td></tr>
          <tr><td><code>$text-2xl</code></td><td><code>font-size: 1.666rem</code></td></tr>
          <tr><td><code>$text-3xl</code></td><td><code>font-size: 2.369rem</code></td></tr>
          <tr><td><code>$text-4xl</code></td><td><code>font-size: 3.157rem</code></td></tr>
          <tr><td><code>$text-5xl</code></td><td><code>font-size: 4.209rem</code></td></tr>
          <tr><td><code>$text-6xl</code></td><td><code>font-size: 5.653rem</code></td></tr>
        </table>
      </b-card>
      <h3>Ombres</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions tint-alternate-rows">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr>
            <td><code>$shadow-default</code></td><td>
              <code>0 0.8rem 1.7rem -0.3rem rgba($gray-900, 0.15),
                0 0.5rem 1rem -0.5rem rgba($gray-900, 0.2),
                0 -0.4rem 1rem -0.4rem rgba($gray-900, 0.015);</code>
            </td>
          </tr>
          <tr>
            <td><code>$shadow-raised</code></td><td>
              <code>0 1.25rem 2.1rem -0.3rem rgba($gray-900, 0.15),
                0 0.9rem 1.4rem -0.5rem rgba($gray-900, 0.2),
                0 -0.75rem 1.4rem -0.4rem rgba($gray-900, 0.015);</code>
            </td>
          </tr>
          <tr><td><code>$box-shadow</code></td><td><code>$shadow-default</code></td></tr>
        </table>
      </b-card>
      <h3>Radi de les vores</h3>
      <b-card variant="outline" size="sm" overflow-hidden class="mt-4">
        <table class="table vertical-divisions tint-alternate-rows">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr><td><code>$border-radius-xs</code></td><td><code>0.5rem</code></td></tr>
          <tr><td><code>$border-radius-sm</code></td><td><code>0.75rem</code></td></tr>
          <tr><td><code>$border-radius-md</code></td><td><code>1rem</code></td></tr>
          <tr><td><code>$border-radius-lg</code></td><td><code>1.5rem </code></td></tr>
          <tr><td><code>$border-radius-xl</code></td><td><code>2rem</code></td></tr>
          <tr><td><code>$border-radius-pill</code></td><td><code>50rem</code></td></tr>
          <tr><td><code>$border-radius</code></td><td><code>$border-radius-md</code></td></tr>
          <tr><td><code>$blob-radius</code></td><td><code>10rem</code></td></tr>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'page'
}
</script>
