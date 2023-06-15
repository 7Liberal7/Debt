const debt = [
  {
    "Advertiser": "Aragon",
    "States": "AL,AK,AZ,AR,CA,CO,DE,FL,GA,ID,IL,IN,IA,KY,LA,ME,MD,MA,MI,MS,MO,MT,NE,NV,NH,NJ,NM,NY,ND,OH,OK,PA,RI,SD,TN,TX,UT,VA,WV,WI",
    "Debt types": "CC",
    "Debt amount": "15000+",
    "State": "Alabama",
    "Abbreviation": "AL",
    "ARAGON EXC": "CT",
    "ARAGON INC": "AL",
    "Scale slub exc": "GA",
    "Scale club inc": "AL",
    "Ultra99 excl": "OR",
    "Ultra99 inc": "AL",
    "Column20": "Types of debt"
  },
  {
    "Advertiser": "A4D",
    "Debt amount": "15,000-75,000",
    "State": "Alaska",
    "Abbreviation": "AK",
    "ARAGON EXC": "HI",
    "ARAGON INC": "AK",
    "Scale slub exc": "ID",
    "Scale club inc": "AK",
    "Ultra99 inc": "AK",
    "Column20": "CC"
  },
  {
    "Advertiser": "Ultra99",
    "Cost": 40,
    "States": "AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY",
    "Debt types": "CC",
    "Debt amount": 15000,
    "Сall length": "120 s",
    "Working Time": "12pm to 6pm mon to Fri EST",
    "Cap": "15 daily sells",
    "Language": "English",
    "Other": "Income",
    "State": "Arizona",
    "Abbreviation": "AZ",
    "ARAGON EXC": "KS",
    "ARAGON INC": "AZ",
    "Scale slub exc": "ND",
    "Scale club inc": "AZ",
    "Ultra99 inc": "AZ",
    "Column20": "Mortgage"
  },
  {
    "Advertiser": "Scaleclub",
    "Cost": 36,
    "States": "AL,AK,AZ,AR,CA,CO,CT,DE,FL,HI,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY",
    "Debt types": "СС",
    "Debt amount": 15000,
    "Сall length": "124 s",
    "Working Time": "Mon - Fri, 11:15a - 7:30p EST, Lunch 3p - 4p EST ",
    "Cap": "10 daily sells",
    "Language": "English + Spanish",
    "Other": "Income",
    "State": "Arkansas",
    "Abbreviation": "AR",
    "ARAGON EXC": "MN",
    "ARAGON INC": "AR",
    "Scale club inc": "AR",
    "Ultra99 inc": "AR",
    "Column20": "Auto"
  },
  {
    "Advertiser": "curadebt",
    "Debt amount": 10000,
    "State": "California",
    "Abbreviation": "CA",
    "ARAGON EXC": "NC",
    "ARAGON INC": "CA",
    "Scale club inc": "CA",
    "Ultra99 inc": "CA",
    "Column20": "Student"
  },
  {
    "Advertiser": "Oasis",
    "State": "Colorado",
    "Abbreviation": "CO",
    "ARAGON EXC": "OR",
    "ARAGON INC": "CO",
    "Scale club inc": "CO",
    "Ultra99 inc": "CO",
    "Column20": "Medical"
  },
]

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

newDebt = []

for (let item of debt) {
  obj = {
    "Advertiser": item["Advertiser"],
    "Debt amount": item["Debt amount"],
    "States": item["States"],
  }
  newDebt.push(obj)
}

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


function conditionFilter() {
  let strFinalAdvertisers = ''

  for (let item of newDebt) {
    if (typeof (item['Debt amount']) == typeof (1)) {
      if (Number(item['Debt amount']) != amountValue) continue
    }
    
    if (typeof (item['Debt amount']) == typeof ('string')) {
      if (item['Debt amount'].includes('+')) {
        splitsStr = item['Debt amount'].split('+')
        if (amountValue <= Number(splitsStr[0].replace(',', ''))) continue
      }
    }

    if (typeof (item['Debt amount']) == typeof ('string')) {
      if (item['Debt amount'].includes('-')) {
        splitsStr = item['Debt amount'].split('-')
        if (amountValue <= Number(splitsStr[0].replace(',', ''))) continue
        if (amountValue >= Number(splitsStr[1].replace(',', ''))) continue
      }
    }

    if (item['States'] != undefined) {
      list = item['States'].split(',')
      if (list.find((elem) => stateValue) == -1) continue
    }

    if (item['Debt amount'] != undefined || item['States'] != undefined){
      strFinalAdvertisers += `${item['Advertiser']}, `
    }
  }

  strFinalAdvertisers = strFinalAdvertisers.slice(0, -1)
  let textAdvertisers = document.querySelector('#advertisersList')
  textAdvertisers.innerText = `Information completed successfully! Contact us for a free consultation: ${strFinalAdvertisers}`
}