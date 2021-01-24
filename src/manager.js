const Enployee = require('./employee')
const Util = require('./util')

class Manager extends Enployee {
  #bonuses = 2000

  get bonuses () {
    return Util.formatCurrecy(this.#bonuses)
  }

  get netPay () {
    const finalValue = 
      Util.unformatCurrecy(super.netPay) + Util.unformatCurrecy(this.bonuses)

    return Util.formatCurrecy(finalValue)
  }
} 

module.exports = Manager