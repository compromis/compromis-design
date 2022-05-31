<template>
  <div class="color-input">
    <div class="color-input-inner">
      <input v-model="color" type="color" v-bind="$attrs">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    }
  },

  computed: {
    color: {
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
.color-input {
  border: 2px solid var(--gray-200);
  border-radius: 3rem;
  width: fit-content;

  &-inner {
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 3rem;
    height: 38px;
    width: 38px;
  }

  input {
    border: none;
    height: 40px;
    width: 40px;
    appearance: none;
    border-radius: 5rem;
    margin: 0;
    padding: 0;
    margin-top: -1px;
    display: block;
    margin-left: -1px;
  }
}
</style>
