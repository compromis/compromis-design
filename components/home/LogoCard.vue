<template>
  <div>
    <h3>Logo</h3>
    <b-card size="lg" content-class="logo-card">
      <b-card-section class="logo-preview-section">
        <div class="compromis-logo-preview">
          <compromis-logo />
          <div v-if="!twoLiner" class="local-logo-preview">
            {{ localName }}
          </div>
          <div v-else class="local-logo-preview two-liner">
            <span>{{ twoLines.line1 }}</span>
            <span>{{ twoLines.line2 }}</span>
          </div>
        </div>
      </b-card-section>
      <b-card-section border-top border-right>
        <label>Logo de Compromís</label>
        <div class="d-flex">
          <b-button
            to="/logo"
            variant="primary"
            size="lg"
            has-shadow
            outline
            class="me-2"
          >
            <span>Guies d'ús</span>
          </b-button>
          <b-button href="/assets/logo/logo.zip" variant="supermuted" size="lg">
            <fa :icon="['far', 'arrow-circle-down']" /> Logo
          </b-button>
        </div>
      </b-card-section>
      <b-card-section border-top>
        <label for="localName">Genera el logo del teu col·lectiu</label>
        <custom-local-generator :municipalities="municipalities" @name-change="(name) => localName = name" />
      </b-card-section>
    </b-card>
  </div>
</template>

<script>
import splitIntoTwoLines from '@/components/logos/custom-local/twolines'
import CompromisLogo from '@/components/logos/CompromisLogo'
import CustomLocalGenerator from '@/components/logos/CustomLocalGenerator'

export default {
  components: {
    CompromisLogo,
    CustomLocalGenerator
  },

  props: {
    municipalities: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      localName: '',
      twoLines: {}
    }
  },

  computed: {
    twoLiner () {
      const name = this.localName
      const spaces = name.indexOf(' ')
      return name.length > 11 && spaces >= 0
    }
  },

  watch: {
    localName () {
      this.twoLines = splitIntoTwoLines(this.localName)
    }
  }
}
</script>

<style lang="scss">
  .logo-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .logo-preview-section {
    grid-column: span 2;
  }

  @include media-breakpoint-down(md) {
    .logo-card {
      grid-template-columns: 1fr;
    }

    .logo-preview-section {
      grid-column: span 1;
    }
  }
</style>

<style lang="scss" scoped>
.compromis-logo-preview {
  display: flex;
  justify-content: center;
  align-items: center;

  .local-logo-preview {
    font-size: 48px;
    color: $gray-600;
    letter-spacing: -.03em;
    margin-left: 20px;

    &.two-liner {
      font-size: 2rem;
      text-align: left;
      line-height: 1;

      span {
        display: block;
      }
    }
  }

  svg {
    max-width: 400px;
    width: 100%;
  }
}

@include media-breakpoint-down(md) {
  .compromis-logo-preview {
    position: relative;
    width: fit-content;
    margin: 0 auto;

    .local-logo-preview {
      position: absolute;
      top: 83%;
      left: 54%;
      font-size: 1.15rem;
      line-height: 1;

      &.two-liner {
        font-size: 1.15rem;
      }
    }
  }
}
</style>
