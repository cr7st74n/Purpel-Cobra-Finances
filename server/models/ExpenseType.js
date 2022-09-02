const { Schema, model, SchemaTypes } = require('mongoose');

const expenseTypeSchema = new Schema ({
    expenseType: {
        type: String,
        required: true
    }
});


const ExpenseType = model('ExpenseType', expenseTypeSchema)
module.exports = ExpenseType;