<template>
  <div class="form-check">
    <input
      :id="'checkbox' + name"
      v-model="checked"
      class="form-check-input"
      type="checkbox"
      :value="value"
      :checked="checked"
    >
    <label :for="'checkbox' + name" class="form-check-label">
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
      type: Boolean,
      default: false
    },

    defaultValue: {
      type: String,
      default: 'true'
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
