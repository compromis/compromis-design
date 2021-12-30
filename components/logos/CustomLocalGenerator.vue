<template>
  <div class="input-append generator">
    <div class="input-field input-default input-lg text-lg input-border-supermuted">
      <input
        id="localName"
        class="input w-100"
        :value="name"
        placeholder="Alacant"
        list="municipalities"
        @input="updateName"
        @keypress="preventTyping"
        @keydown.delete="resetTyping"
        @keypress.enter="download('H')"
      >
    </div>
    <b-dropdown opens="hover">
      <template #toggler>
        <b-button variant="supermuted" size="lg" class="input-append-last text-nowrap">
          Descarrega
          <fa :icon="['far', 'chevron-down']" />
        </b-button>
      </template>
      <b-card>
        <b-card-section v-if="!canDownload" border-bottom class="text-muted">
          Has d'escriure un nom vàlid d'un <br>
          col·lectiu local o comarcal de Compromís
        </b-card-section>
        <b-card-list menu>
          <li>
            <button :disabled="!canDownload" class="text-nowrap" @click="download('H', 'svg')">
              Horitzontal <span class="text-muted">(.svg)</span>
            </button>
          </li>
          <li>
            <button :disabled="!canDownload" class="text-nowrap" @click="download('H', 'svg')">
              Horitzontal <span class="text-muted">(.png)</span>
            </button>
          </li>
          <li>
            <button :disabled="!canDownload" class="text-nowrap" @click="download('H', 'svg')">
              Comprimida <span class="text-muted">(.svg)</span>
            </button>
          </li>
          <li>
            <button :disabled="!canDownload" class="text-nowrap" @click="download('H', 'svg')">
              Comprimida <span class="text-muted">(.png)</span>
            </button>
          </li>
        </b-card-list>
      </b-card>
    </b-dropdown>
    <datalist id="municipalities">
      <option v-for="(municipality, i) in municipalities" :key="i">
        {{ municipality }}
      </option>
    </datalist>
  </div>
</template>

<script>
import utf8 from 'utf8'
import BDropdown from '@compromis/blobby/components/dropdown/BDropdown.vue'
import localHorizontalOneLiner from './custom-local/local-horizontal-oneliner'
import localHorizontalTwoLiner from './custom-local/local-horizontal-twoliner'
import localVerticalOneLiner from './custom-local/local-vertical-oneliner'
import localVerticalTwoLiner from './custom-local/local-vertical-twoliner'

export default {
  name: 'CustomLocalGenerator',

  components: {
    BDropdown
  },

  props: {
    municipalities: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      name: '',
      canType: true
    }
  },

  computed: {
    canDownload () {
      return this.municipalities.includes(this.name)
    }
  },

  watch: {
    name () {
      if (this.municipalities.includes(this.name)) {
        this.$emit('name-change', this.name)
      } else {
        this.$emit('name-change', '')
      }
    }
  },

  methods: {
    updateName (e) {
      const value = e.target.value

      if (!this.canType) {
        return
      }

      const coincidences = this.municipalities.filter((municipality) => {
        return municipality.toLowerCase().startsWith(value.toLowerCase())
      })

      if (coincidences.length === 1) {
        this.name = coincidences[0]
        this.canType = false
      } else {
        this.name = value
      }
    },

    preventTyping (e) {
      if (!this.canType) { e.preventDefault() }
    },

    resetTyping (e) {
      if (!this.canType) {
        this.name = ''
        this.canType = true
      }
    },

    download (version, format) {
      if (!this.municipalities.includes(this.name)) {
        alert('Has d\'escriure un nom vàlid d\'un col·lectiu local o comarcal de Compromís')
        return
      }

      let svgData
      const name = utf8.encode(this.name)
      const spaces = name.indexOf(' ')

      if (version === 'H') {
        svgData = name.length > 11 && spaces >= 0 ? localHorizontalTwoLiner(name) : localHorizontalOneLiner(name)
      } else {
        svgData = name.length > 11 && spaces >= 0 ? localVerticalTwoLiner(name) : localVerticalOneLiner(name)
      }

      if (format === 'png') {
        return this.downloadPng(svgData)
      }

      return this.downloadSvg(svgData)
    },

    downloadPng (data) {
      const canvas = document.createElement('canvas')
      canvas.setAttribute('width', 2000)
      canvas.setAttribute('height', 400)
      const ctx = canvas.getContext('2d')
      const img = new Image()
      const svg = 'data:image/svg+xml;base64,' + window.btoa(data)

      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        const png = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = png
        link.download = 'compromis-local.png'
        link.click()
      }
      img.src = svg
    },

    downloadSvg (data) {
      const link = document.createElement('a')
      link.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(data))
      link.setAttribute('download', 'compromis-local.svg')
      link.click()
    }
  }
}
</script>
