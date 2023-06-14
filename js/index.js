window.addEventListener("load", (event) => {

  const formBlock = document.querySelector('#form');
  const debt = document.querySelector('#debt');
  const amount = document.querySelector('#amount');
  const state = document.querySelector('#state');
  const income = document.querySelector('#income');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const secureBlock = document.querySelector('.secure');
  const rangeAmount = document.querySelector('#customRange1')
  const btn_done = document.querySelector('#submit');
  const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
  const submit_block = document.querySelector('.submit-block');

  const inputDebt = document.querySelector('input[name="debt"]');
  const inputAmount = document.querySelector('input[name="amount"]');
  const inputState = document.querySelector('input[name="state"]');
  const inputIncome = document.querySelector('input[name="income"]');

  const step = document.querySelectorAll('.step li');

  debt.addEventListener('change', () => {
    inputDebt.value = debt.value;
    step[0].classList.add('step-bg');
    amount.classList.remove('hide');
  })

  amount.addEventListener('change', () => {
    dropdownMenuButton.textContent = rangeAmount.value;
    inputAmount.value = rangeAmount.value;
    step[1].classList.add('step-bg');
    state.classList.remove('hide');
  })

  state.addEventListener('change', () => {
    inputState.value = state.value;
    step[2].classList.add('step-bg');
    income.classList.remove('hide');
  })

  income.addEventListener('change', () => {
    inputIncome.value = income.value;
    step[3].classList.add('step-bg');
    email.classList.remove('hide');
    phone.classList.remove('hide');
    secureBlock.classList.remove('hide');
    btn_done.classList.remove('hide');

    console.log(inputDebt.value, inputAmount.value, inputState.value, inputIncome.value)
  })


  btn_done.addEventListener('click', () => {
    formBlock.classList.add('hd');
    submit_block.classList.remove('hide');
  })
});

let debtValue
let amountValue
let stateValue
let incomeValue

function checkDebt(select) {
  debtValue = select.value
}

function checkAmount() {
  const amountBtn = document.querySelector('#dropdownMenuButton')
  amountValue = amountBtn.textContent
}

function checkState(select) {
  stateValue = select.value
}

function checkIncome(select) {
  incomeValue = select.value
}

function Aragon(value, state) {
  if (Number(value) < 15000) return false
  let AragonStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KY", "LA", "ME", "MD", "MA", "MI", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "ND", "OH", "OK", "PA", "RI", "SD", "TN", "TX", "UT", "VA", "WV", "WI"]
  if (AragonStates.find((elem) => state) == -1) return false
  return true
}

function A4D(value) {
  if (Number(value) > 15000 && Number(value) < 75000) return true
}

function Ultra99(value, state) {
  if (Number(value) != 15000) return false
  let Ultra99States = ["AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
  if (Ultra99States.find((elem) => state) == -1) return false
  return true
}

function Scaleclub(value, state) {
  if (Number(value) != 15000) return false
  let ScaleclubStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "HI", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
  if (ScaleclubStates.find((elem) => state) == -1) return false
  return true
}

function curadebt(value) {
  if (Number(value) == 10000) return true
}

function Oasis() {
  return true
}


function conditionFilter() {
  let strFinalAdvertisers = ''
  if (Aragon(amountValue, stateValue)) {
    strFinalAdvertisers += ' Aragon,'
  }

  if (A4D(amountValue)) {
    strFinalAdvertisers += ' A4D,'
  }

  if (Ultra99(amountValue, stateValue)) {
    strFinalAdvertisers += ' Ultra99,'
  }

  if (Scaleclub(amountValue, stateValue)) {
    strFinalAdvertisers += ' Scaleclub,'
  }

  if (curadebt(amountValue)) {
    strFinalAdvertisers += ' curadebt,'
  }

  if (Oasis()) {
    strFinalAdvertisers += ' Oasis,'
  }
  strFinalAdvertisers = strFinalAdvertisers.slice(0, -1)
  let textAdvertisers = document.querySelector('#advertisersList')
  textAdvertisers.innerText = `Information completed successfully! Contact us for a free consultation: ${strFinalAdvertisers}`
}