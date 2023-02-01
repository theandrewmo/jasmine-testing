window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount")
  let years = document.getElementById("loan-years")
  let rate = document.getElementById("loan-rate")
  amount.value = 50000
  years.value = 10
  rate.value = 5
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const {amount, years, rate} = values;
  const i = rate / 100 / 12;
  const n = years * 12;
  let monthlyPayment = ((amount * i)/(1-(1+i)**-n)) 
  monthlyPayment = monthlyPayment.toFixed(2)
  return monthlyPayment
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById('monthly-payment').innerText = `$ ${monthly}`
}
