const account = {
    name: 'John Dinh',
    expenses: [],
    income: [],    
    addExpense: function (desc, amount) {
        this.expenses.push({
            description: desc,
            amount: amount
        })
    },
    addIncome: function (desc, amount) {
        this.income.push({
            description: desc,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        const balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

// 1. add Income array to account
// 2. addIncome method --> description, amount
// 3. Tweak getAccountSummary

// John Dinh has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())