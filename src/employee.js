const EntityBase = require("./EntityBase");
const Util = require("./util");


class Enployee extends EntityBase {
  static #TAXES_PERCENTUAL = 0.2
  #grossPay = 5000.40

  get grossPay() {
    return Util.formatCurrecy(this.#grossPay)
  }

  get netPay() {
    const result = this.#grossPay - (this.#grossPay * Enployee.#TAXES_PERCENTUAL
      )
    return Util.formatCurrecy(result)
  }

}

module.exports = Enployee