<template>
  <div :class="['form-check', isSwitch && 'form-switch', dark && 'checkbox-dark']">
    <input
      :id="'checkbox' + name + defaultValue"
      v-model="checked"
      :name="name"
      class="form-check-input"
      type="checkbox"
      :value="defaultValue"
      :role="isSwitch ? 'switch' : null"
    >
    <label :for="'checkbox' + name + defaultValue" class="form-check-label">
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

    dark: {
      type: Boolean,
      default: false
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
