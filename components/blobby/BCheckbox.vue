<template>
  <div :class="['form-check', isSwitch && 'form-switch',`checkbox-${variant}`]">
    <label v-if="$slots.prepend" :for="'checkbox' + name + value" class="form-check-label prepend">
      <slot name="prepend" />
    </label>
    <input
      :id="'checkbox' + name + defaultValue"
      v-model="checked"
      :name="name"
      class="form-check-input"
      type="checkbox"
      :value="defaultValue"
      :role="isSwitch ? 'switch' : null"
    >
    <label v-if="$slots.default" :for="'checkbox' + name + defaultValue" class="form-check-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },

    value: {
      type: [Boolean, Array],
      default: false
    },

    defaultValue: {
      type: String,
      default: 'true'
    },

    isSwitch: {
      type: Boolean,
      default: false
    },

    variant: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    checked: {
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
