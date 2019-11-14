class Atm {
  constructor (balance) {
    this.balance = 0
  }

  get showBalance () {
    return this.balance
  }
}

let atm = new Atm()

console.log(atm.balance)
