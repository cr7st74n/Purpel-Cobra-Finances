const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    },
    password: {
        type: String,
        required: true
    },
    expenses: [{
        type: SchemaTypes.ObjectId,
        ref: 'Expense'
    }]
});

userSchema.pre('save', async function() {
    const hashedPass = await bcrypt.hash(this.password, 10);
    this.password = hashedPass;
});

userSchema.methods.validatePass = async function (unencryted_password) {
    const validPassword = await bcrypt.compare(unencryted_password, this.password);
    return validPassword;
};

userSchema.methods.addTotals = async function () {
    let groceryTotal = 0;
    let autoTotal = 0;
    let housingTotal = 0;
    let entertainmentTotal = 0;
    let savingsTotal = 0;
    this.expenses.expense.map((expense) => {
        if (expense.name === 'Grocery') {
            groceryTotal += expense;
        } else if (expense.name === 'Auto') {
            autoTotal += expense;
        } else if (expense.name === 'Housing') {
            housingTotal += expense;
        } else if (expense.name === 'Entertainment') {
            entertainmentTotal += expense;
        } else if (expense.name === 'Medical') {
            medicalTotal += expense;
        } else if (expense.name === 'Savings') {
            savingsTotal += expense;
        }
    })
}

const User = model('User', userSchema);

module.exports = User;