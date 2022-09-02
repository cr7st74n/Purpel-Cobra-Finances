const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }

  type Auth {
    user: User
    token: ID
  }

  type Expense {
    _id: ID!
    name: String!
    expenseType: String!
    price: Int!
  }

  type Query {
    getExpenses: [Expense]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addExpense(name: String!, expenseType: String!, price: Int!): Expense
    addExpenseType(expenseType: String!): Expense
  }
`;

module.exports = typeDefs