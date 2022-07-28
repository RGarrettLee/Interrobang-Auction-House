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
    closingDate:Int!
    price: Int!
    highestBidder: Int!
  }

  type Auth {
    token:ID!
    user: User
  }

  type Query {
    auctionItem:[auctionItem]
    user:[User]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!, address: String!,): Auth
    login(email: String!, password: String!): Auth
    addAuctionItem(name: String!, images: String!,price:Int!,closingDate: Int!,highestBidder: Int!):auctionItem
    removeUser(userId: ID!): User
    removeAuctionItem(auctionItemId: ID!): auctionItem
  }
`;

module.exports = typeDefs;
