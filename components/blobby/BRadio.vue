<template>
  <component
    :is="component"
    v-bind="componentAttrs"
    :class="[
      'radio-field',
      'form-check',
      'radio-' + variant,
      {
        'selected': isSelected,
        'disabled': disabled,
        'focus-dark-within' : focusDark && !!card
      }
    ]"
  >
    <input
      :id="name + defaultValue"
      v-model="selected"
      :value="defaultValue"
      type="radio"
      :name="name"
      :disabled="disabled"
      :class="['radio-input', 'form-check-input', { 'visually-hidden': !!card }]"
    >
    <slot />
  </component>
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
      default: null
    },
    defaultValue: {
      type: [String, Boolean, Array, Object, Number],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'default'
    },
    focusDark: {
      type: Boolean,
      default: false
    },
    card: {
      type: [Boolean, Object],
      default: false
    }
  },

  emits: ['input'],

  computed: {
    selected: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    },

    isSelected () {
      return this.selected === this.defaultValue
    },

    component () {
      return this.card ? 'b-card' : 'label'
    },

    componentAttrs () {
      if (this.component === 'label') {
        return {
          for: this.name + this.defaultValue
        }
      }

      const cardProps = typeof this.card === 'object' ? this.card : null

      return {
        as: 'label',
        for: this.name + this.defaultValue,
        padded: true,
        ...cardProps
      }
    }
  }
}
</script>
