const screenResult = document.getElementById('screenResult')
const inputAddAndWithdraw = document.getElementById('inputAddAndWithdraw')
const showBalanceAtm = document.getElementById('showBalanceAtm')
const showBalanceCard = document.getElementById('showBalanceCard')
const aadMoneyAtm = document.getElementById('aadMoneyAtm')
const sum = document.getElementById('sum')
const bills = document.getElementById('bills')
const addMoneyCard = document.getElementById('addMoneyCard')
const withdrawCash = document.getElementById('withdrawCash')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const createdCard = document.getElementById('createdCard')
const buttonAddMoneyCard = document.getElementById('buttonAddMoneyCard')
const buttonWithdrawCashCard = document.getElementById('buttonWithdrawCashCard')
let issueBills = []
let card

class CreditCard {
  constructor () {
    this.balance = 0
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
    } else {
      screenResult.style.justifyContent = 'center'
      screenResult.innerHTML = 'Error!Not enough money in card'
    }
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
      sumArrBills += Number(arrBills[i])
    }
    if (sum === sumArrBills) {
      this.balance.sum += sum
      let newArrayOfBills
      newArrayOfBills = this.balance.bills
      newArrayOfBills.push(...arrBills)
      this.balance.bills = newArrayOfBills
      screenResult.innerHTML = ''
    } else {
      screenResult.style.justifyContent = 'center'
      screenResult.innerHTML = 'Error! Incorrect denomination bills'
    }
  }

  validationMoneyAtm = (money) => {
    if (this.balance.sum >= money) {
      screenResult.innerHTML = ''
      return true
    } else {
      screenResult.style.justifyContent = 'center'
      screenResult.innerHTML = 'Error!Not enough money in Atm'
    }
  }

  validationBillsAvailability = (money) => {
    issueBills = []
    let rest
    this.balance.bills.sort((a, b) => b - a)
    let minBill = Math.min.apply(null, this.balance.bills)
    if (money) {
      if (money < minBill) {
        screenResult.style.justifyContent = 'left'
        screenResult.innerHTML = `Error! There is no ${money} in ATM choose another sum. Available bills ${atm.showBalance.bills}`
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
        screenResult.style.justifyContent = 'left'
        screenResult.innerHTML = `Error! There is no ${money} in ATM choose another sum.Available bills ${atm.showBalance.bills}`
        return false
      }
      screenResult.innerHTML = `Here is your money ${issueBills}`
      screenResult.style.justifyContent = 'center'
      return issueBills
    }
  }

  withdrawCash = (supper, money) => {
    if (supper.validationMoneyCard(money) && this.validationMoneyAtm(money) && this.validationBillsAvailability(money)) {
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

const atm = new Atm()

createdCard.addEventListener('click', () => {
  card = new CreditCard()
  screenResult.innerHTML = ''
  screenResult.innerHTML = 'You created new credit card'
})

showBalanceAtm.addEventListener('click', () => {
  screenResult.innerHTML = `${atm.showBalance.sum},[${atm.showBalance.bills}]`
  inputAddAndWithdraw.style.display = 'none'
  buttonAddMoneyCard.style.display = 'none'
  if (atm.balance.bills.length >= 7) {
    screenResult.style.justifyContent = 'left'
  }
})

showBalanceCard.addEventListener('click', () => {
  if (!card) {
    screenResult.innerHTML = 'Error! Creat new credit card'
  } else {
    screenResult.innerHTML = `${card.showBalance}`
    inputAddAndWithdraw.style.display = 'none'
    buttonAddMoneyCard.style.display = 'none'
    buttonWithdrawCashCard.style.display = 'none'
    screenResult.style.justifyContent = 'center'
  }
})

aadMoneyAtm.addEventListener('click', () => {
  let a = bills.value.split(' ')
  if (sum.value !== '') {
    if (isFinite(sum.value)) {
      atm.addMoneyAtm(Number(sum.value), a)
      sum.value = ''
      bills.value = ''
      buttonWithdrawCashCard.style.display = 'none'
      buttonAddMoneyCard.style.display = 'none'
      inputAddAndWithdraw.style.display = 'none'
    } else {
      screenResult.innerHTML = `Error! Incorrectly entered data`
    }
  }
})

one.addEventListener('click', () => {
  inputAddAndWithdraw.value += one.innerText
})
two.addEventListener('click', () => {
  inputAddAndWithdraw.value += two.innerText
})
three.addEventListener('click', () => {
  inputAddAndWithdraw.value += three.innerText
})
four.addEventListener('click', () => {
  inputAddAndWithdraw.value += four.innerText
})
five.addEventListener('click', () => {
  inputAddAndWithdraw.value += five.innerText
})
six.addEventListener('click', () => {
  inputAddAndWithdraw.value += six.innerText
})
seven.addEventListener('click', () => {
  inputAddAndWithdraw.value += seven.innerText
})
eight.addEventListener('click', () => {
  inputAddAndWithdraw.value += eight.innerText
})
nine.addEventListener('click', () => {
  inputAddAndWithdraw.value += nine.innerText
})
zero.addEventListener('click', () => {
  inputAddAndWithdraw.value += zero.innerText
})

addMoneyCard.addEventListener('click', () => {
  screenResult.innerHTML = ''
  if (!card) {
    screenResult.innerHTML = 'Error! Creat new credit card'
  } else {
    inputAddAndWithdraw.value = ''
    inputAddAndWithdraw.style.display = 'block'
    buttonAddMoneyCard.style.display = 'block'
    buttonWithdrawCashCard.style.display = 'none'
    inputAddAndWithdraw.style.borderColor = 'cornflowerblue'
  }
})

buttonAddMoneyCard.addEventListener('click', () => {
  if (isFinite(inputAddAndWithdraw.value)) {
    card.addMoneyCard(Number(inputAddAndWithdraw.value))
    const sumAdd = inputAddAndWithdraw.value
    inputAddAndWithdraw.value = ''
    screenResult.innerHTML = ''
    inputAddAndWithdraw.style.display = 'none'
    buttonAddMoneyCard.style.display = 'none'
    screenResult.innerHTML = `You added ${sumAdd} to credit card`
  } else {
    screenResult.innerHTML = `Error! Incorrectly entered data`
  }
})

withdrawCash.addEventListener('click', () => {
  screenResult.innerHTML = ''
  if (!card) {
    screenResult.innerHTML = 'Error! Creat new credit card'
  } else {
    inputAddAndWithdraw.value = ''
    inputAddAndWithdraw.style.display = 'block'
    buttonWithdrawCashCard.style.display = 'block'
    buttonAddMoneyCard.style.display = 'none'
    inputAddAndWithdraw.style.borderColor = 'green'
  }
})

buttonWithdrawCashCard.addEventListener('click', () => {
  if (isFinite(inputAddAndWithdraw.value)) {
    atm.withdrawCash(card, Number(inputAddAndWithdraw.value))
    inputAddAndWithdraw.value = ''
    inputAddAndWithdraw.style.display = 'none'
    buttonWithdrawCashCard.style.display = 'none'
  } else {
    screenResult.innerHTML = `Error! Incorrectly entered data`
  }
})
