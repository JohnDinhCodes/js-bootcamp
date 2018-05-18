let myAccount = {
    name: 'John Dinh',
    expenses: 0,
    income: 0
}

let addExpense = function (account, expenseAmount) {
    account.expenses += expenseAmount
}

// addIncome
let addIncome = function (account, incomeAmount) {
    account.income += incomeAmount
}

// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has a balance of $${balance}. Their income is $${account.income}, their expenses is $${account.expenses}.`
}
// Account for Andrew has $900, $1000 in income, $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

console.log(myAccount)
addIncome(myAccount, 2500)
addExpense(myAccount, 500)
addExpense(myAccount, 1500)
let summary = getAccountSummary(myAccount)
console.log(summary)
resetAccount(myAccount)
summary = getAccountSummary(myAccount)
console.log(summary)