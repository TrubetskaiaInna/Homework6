class Atm {
  constructor () {
    this.balance = 0
  }

  set addMoneyAtm (value) {
    this.balance = value
  }
}

class CreditCard {
  constructor () {
    this.balance = 0
  }

  set addMoneyCard (value) {
    this.balance = value
  }
}

//const arr = [50, 100, 200, 300, 500, 1000]
const someSumMoneyAtm = 1000   //input
const someArrBillsAtm = [500, 200, 200, 100] //input
const someSumMoneyCard = 2000 //input
let sumArrCup = 0
const moneyAtm = []
let resultAddBillsAtm
const addBillsAtm = (sum, arrBills) => {
  resultAddBillsAtm = 'Error! Incorrectly entered bills'
  for (let i = 0; i < arrBills.length; i++) {
    sumArrCup += arrBills[i]
    if (sum === sumArrCup) {
      moneyAtm.push(sum, arrBills)
      resultAddBillsAtm = moneyAtm
    }
  }
  return resultAddBillsAtm
}

addBillsAtm(someSumMoneyAtm, someArrBillsAtm)

const atm = new Atm()
const creditCard = new CreditCard()

atm.addMoneyAtm = resultAddBillsAtm
console.log(atm.balance)  //button
creditCard.addMoneyCard = someSumMoneyCard
console.log(creditCard.balance) //button
