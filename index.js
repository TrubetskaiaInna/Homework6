class Atm {
  constructor (balance) {
    this.balance = 0
  }

  get showBalance () {
    return this.balance
  }

  set addMoneyAtm (value) {
    this.balance = value
  }
}

const arr = [50, 100, 200, 300, 500, 1000]
let someSumMoneyAtm = 1000   //input
let someArrBillsAtm = [500, 200, 200, 100] //input
let sumArrCup = 0
let moneyAtm = []
const addBillsAtm = (sum, arrBills) => {
  let resultAddBillsAtm = 'Error!'
  for (let i = 0; i < arrBills.length; i++) {
    sumArrCup += arrBills[i]
    if (sum === sumArrCup) {
      moneyAtm.push(sum, arrBills)
      resultAddBillsAtm = moneyAtm
    }
  }
  return resultAddBillsAtm
}

addBillsAtm(someSumMoneyAtm,someArrBillsAtm)

let atm = new Atm()

atm.addMoneyAtm = moneyAtm
console.log(atm.balance)  //button
