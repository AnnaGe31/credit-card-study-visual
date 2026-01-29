const config = JSON.parse(
  document.getElementById("config").textContent
);

const STATEMENT_BALANCE = config.statementBalance;
const CURRENT_BALANCE = config.currentBalance;
const MIN_PAYMENT = config.minimumPayment;
const ANNUAL_RATE = config.annualInterestRate;
const MONTHLY_RATE = ANNUAL_RATE / 12;
