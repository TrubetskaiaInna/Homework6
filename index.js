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
    if (this.balance.sum >= money) {
      return true
    } else {alert('Error!Not enough money on the atm')}
  }

  validationBillsAvailability = (money) => {
    let rest
    let issueBills = []
    this.balance.bills.sort((a, b) => b - a)
    let minBill = Math.min.apply(null, this.balance.bills)
    if (money < minBill) {
      alert(`Error! There is no ${money} in ATM choose another sum`)
    } else {
      for (let i = 0; i < this.balance.bills.length; i++) {
        if (money >= this.balance.bills[i]) {
          rest = money - this.balance.bills[i]
          money = rest
          issueBills.push(this.balance.bills[i])
        }
      }
    }
    if (rest !== 0) {
      alert(`Error! There is no ${money} in ATM choose another sum`)
    }
    return issueBills
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
    if (this.balance >= money) {
      return true
    } else {alert('Error!Not enough money on the card')}
  }
}

const atm = new Atm()
const creditCard = new CreditCard()
const creditCard2 = new CreditCard()

atm.addMoneyAtm(500, [200, 200, 100])
atm.addMoneyAtm(1000, [500, 200, 200, 100])
atm.addMoneyAtm(200, [100, 100])
creditCard.addMoneyCard(2000)
creditCard.addMoneyCard(2000)
creditCard.addMoneyCard(1000)
console.log(atm.showBalance)
console.log(1,creditCard.showBalance)
creditCard.validationMoneyCard(sumMoneyGetCash)
atm.validationMoneyAtm(sumMoneyGetCash)
console.log(atm.validationBillsAvailability(sumMoneyGetCash))
creditCard2.addMoneyCard(7000)
console.log(2,creditCard2.showBalance)
