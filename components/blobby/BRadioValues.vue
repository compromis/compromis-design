<template>
  <b-radio-group size="sm" class="radio-values-group">
    <b-radio
      v-for="thisValue in values"
      :key="thisValue"
      v-model="selected"
      :card="{size: 'sm', type: 'outline', rises: false, focusDark: true}"
      class="px-2 py-1 text-sm"
      :name="name"
      :default-value="thisValue"
      focus-dark
    >
      {{ thisValue }}
    </b-radio>
  </b-radio-group>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Boolean, Array, Object, Number],
      required: true
    },
    values: {
      type: Array,
      required: true
    }
  },

  computed: {
    selected: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-values-group {
  gap: 0.5rem;

  .radio-field.card {
    cursor: pointer;
    font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
    --border-color: var(--gray-600);

    &.selected {
      background: var(--gray-500);
    }

    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
}
</style>
