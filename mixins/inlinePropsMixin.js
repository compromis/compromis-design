export default {
  methods: {
    inlineProps (values, defaults) {
      let props = ''

      Object.entries(values).forEach(([prop, value]) => {
        if (defaults[prop] !== value) {
          switch (typeof defaults[prop]) {
            case 'boolean':
              props += ` ${this.toKebabCase(prop)}`
              break
            case 'string':
              props += ` ${this.toKebabCase(prop)}="${value}"`
              break
            default:
              props += ` :${this.toKebabCase(prop)}="${value}"`
              break
          }
        }
      })

      return props
    },

    toKebabCase (string) {
      return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
    }
  }
}
