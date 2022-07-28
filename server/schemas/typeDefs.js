const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    address: String!
  }

  type auctionItem {
    name: String!
    images: String!
    closingDate:Integer!
    price: Integer!
    highestBidder: User!
  }

  type Auth {
    token:ID!
    user: User
  }

  type Query {
    auctionItems:[auctionItem]
    users:[User]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!, address: String!,): Auth
    login(email: String!, password: String!): Auth
    addauctionItem(name: String!, images: String!,price:Integer!,closingDate: Integer!,highestBidder: User!):auctionItem
    removeUser(userId: ID!): User
    removeauctionItem(auctionItemId: ID!): auctionItem
  }
`;

module.exports = typeDefs;
