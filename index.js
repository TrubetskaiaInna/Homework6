let sumMoneyGetCash = 4000

class Atm {
  constructor () {
    this.balance = {
      sum: 0,
      bills: []
    }
  }

  get showBalance () {
    return this.balance
  }

  addMoneyAtm = (sum, arrBills) => {
    let sumArrBills = 0
    for (let i = 0; i < arrBills.length; i++) {
      sumArrBills += arrBills[i]
    }
    if (sum === sumArrBills) {
      this.balance.sum += sum
      let newArrayOfBills
      newArrayOfBills = this.balance.bills
      newArrayOfBills.push(...arrBills)
      this.balance.bills = newArrayOfBills
    } else {
      alert('Error!')
    }
  }

  validationMoneyAtm = (money) => {
    if (atm.balance.sum >= money) {
      return true
    } else {alert('Error!Not enough money on the atm')}
  }

}

class CreditCard {
  constructor () {
    this.balance = 0
  }

  get showBalance () {
    return this.balance
  }

  addMoneyCard = (value) => {
    this.balance += value
  }

  validationMoneyCard = (money) => {
    if (creditCard.balance >= money) {
      return true
    } else {alert('Error!Not enough money on the card')}
  }
}

const atm = new Atm()
const creditCard = new CreditCard()

atm.addMoneyAtm(500, [200, 200, 100])
atm.addMoneyAtm(1000, [500, 200, 200, 100])
atm.addMoneyAtm(200, [100, 100])
creditCard.addMoneyCard(2000)
creditCard.addMoneyCard(2000)
creditCard.addMoneyCard(1000)
console.log(atm.showBalance)
console.log(creditCard.showBalance)
creditCard.validationMoneyCard(sumMoneyGetCash)
atm.validationMoneyAtm(sumMoneyGetCash)
