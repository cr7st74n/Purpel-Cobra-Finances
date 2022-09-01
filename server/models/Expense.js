const { Schema, model, SchemaTypes } = require('mongoose');

const expSchema = new Schema ({
    expenseType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
});


const Expense = model('Expense', expSchema)

module.exports = Expense;