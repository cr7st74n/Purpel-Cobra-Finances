const { ExpenseType } = require('../models')
const db = require('../config/connection')

let expenseTypes = []

db.once('open', () => {
    ExpenseType.insertMany([{expenseType: 'Auto'}]).then((expenses) => {
        console.log(expenses);
    })
})

    // expenseTypes.push({
    //     expenseType: 'Auto'
    // })
    // console.log(expenseTypes);

    // db.once('open', () => {
    //         ExpenseType.insertMany(expenseTypes)
    //             .then(ExpenseTypes => {
    //             console.log('Expense Types added');
    //     })
    // })