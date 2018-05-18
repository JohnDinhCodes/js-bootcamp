let myAccount = {
    name: 'John Dinh',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, ammount) {
    account.expenses = account.expesnes + ammount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)