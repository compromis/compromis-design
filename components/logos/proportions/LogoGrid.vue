<template>
  <figure>
    <div class="controls">
      <b-button size="sm" class="toggle-button" variant="supermuted" @click="showGrid = !showGrid">
        <template v-if="showGrid">
          <fa fixed-width :icon="['far', 'eye']" class="me-1" /> Guies
        </template>
        <template v-else>
          <fa fixed-width :icon="['far', 'eye-slash']" class="me-1" /> Guies
        </template>
      </b-button>
    </div>
    <!-- eslint-disable-next-line -->
    <component :is="logo" :grid="showGrid" />
  </figure>
</template>

<script>
export default {
  name: 'LogoGrid',

  props: {
    logo: {
      type: [Function, Object],
      default: () => {}
    }
  },

  data () {
    return {
      showGrid: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../sass/variables";

figure {
  padding: 3.5rem calc(1rem + 4vw) 2.5rem;
  position: relative;
  overflow: hidden;

  svg {
    max-height: 300px;
  }
}

.controls {
  position: absolute;
  top: 0;
  right: 0;
}

.toggle-button {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: .35rem;
  border-top-left-radius: 0;
  border: 0;
}

</style>
