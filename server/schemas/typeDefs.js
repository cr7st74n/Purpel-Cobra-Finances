const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    expenses: [Expense]
  }

  type Auth {
    user: User
    token: ID
  }

  type Expense {
    _id: ID
    name: String
    expenseType: String
    price: Int
  }

  type ExpenseType {
    _id: ID!
    expenseType: String!
  }

  type Query {
    getExpenses: [Expense]
    getAllUsers: [User]
    getUser(_id: ID!): User
    getExpenseTypes: [ExpenseType]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addExpense(name: String!, expenseType: ID!, price: Int!): User
    addExpenseType(expenseType: String!): Expense
  }
`;

module.exports = typeDefs