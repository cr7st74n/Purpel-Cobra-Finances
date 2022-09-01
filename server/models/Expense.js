const { Schema, model, SchemaTypes } = require('mongoose');

const expSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    expense: {
        type: Int
    }
});


const Expense = model('Expense', expSchema)

module.exports = Expense;