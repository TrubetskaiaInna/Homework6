let issueBills = []

class CreditCard {
  constructor () {
    this.balance = 100
  }

  get showBalance () {
    return this.balance
  }

  addMoneyCard (value) {
    this.balance += value
  }

  validationMoneyCard (money) {
    if (this.balance >= money) {
      return true
    } else {alert('Error!Not enough money on the card')}
  }
}

class Atm extends CreditCard {
  constructor () {
    super()
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
    issueBills = []
    let rest
    this.balance.bills.sort((a, b) => b - a)
    let minBill = Math.min.apply(null, this.balance.bills)
    if (money < minBill) {
      alert(`Error! There is no ${money} in ATM choose another sum`)
      return false
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
      return false
    }
    console.log(`Here is your money ${issueBills}`)
    return issueBills
  }

  withdrawCash = (supper, money) => {
    if (supper.validationMoneyCard(money)) {
      if (this.validationMoneyAtm(money)) {
        if (this.validationBillsAvailability(money)) {
          supper.balance -= money
          this.balance.sum -= money
          for (let i = 0; i < issueBills.length; i++) {
            for (let j = 0; j < this.balance.bills.length; j++) {
              if (issueBills[i] === this.balance.bills[j]) {
                this.balance.bills.splice(j, 1)
                break
              }
            }
          }
        }
      }
    }
  }
}

const atm = new Atm()
const creditCard = new CreditCard()

atm.addMoneyAtm(2000, [500, 100, 100, 100, 100, 50, 50, 500, 500])
console.log(atm.showBalance)
creditCard.addMoneyCard(2000)
atm.withdrawCash(creditCard, 1000)
atm.withdrawCash(creditCard, 500)

console.log(atm.showBalance)
console.log(creditCard.showBalance)
