class Util {
  static #defaultFormat = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency'
  })

  static formatCurrecy(value) {
    return this.#defaultFormat.format(value)
  }

  static unformatCurrecy(value) {
    return Number(value.replace(/\D/g, '') / 100)
  }
}

module.exports = Util