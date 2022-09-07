const { User, Expense, ExpenseType } = require('../models');
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
    Query: {
        async getExpenses() {
            return await Expense.find()
        },
        async getAllUsers() {
            return await User.find().populate('expenses')
        },
        async getUser(_, args) {
            return await User.findById(args._id).populate('expenses')
        },
        async getExpenseTypes() {
            return await ExpenseType.find()
        }
    },


    Mutation: {
        async addUser(_, { email, password }, context) {
        try {
            const user = await User.create({email, password})
    
            const token = signToken(user);
            return {user, token}
        } catch (err) {
            throw new ApolloError(err)
        }
        },
        async addExpense(_, args, context) {
            const expense = await Expense.create({
                name: args.name,
                expenseType: args.expenseType,
                price: args.price
            })
            const change = await User.findByIdAndUpdate({_id: context.user._id},{
                $push: {
                    expenses: expense._id
                }
            }, {new: true}).populate('expenses')
            console.log(change);
            return change
        },
        async addExpenseType(_, {expenseType}) {
            return await ExpenseType.create({expenseType})
        },
        async loginUser(_, { email, password }, context) {
            const user = await User.findOne({email})

            if (!user) throw new ApolloError('No user found with that email')

            if (!user.validatePass(password)) throw new ApolloError('Password is invalid')

            const token = signToken(user)
            return { user, token }
        }
    }}

module.exports = resolvers