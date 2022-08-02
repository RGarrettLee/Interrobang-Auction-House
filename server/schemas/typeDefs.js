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
    itemDescription: String!
    artistName: String!
    origin: String!
    artistInfo: String!
    dateProduced: String!
    size: String!
    artMedium: String!
    valuation: Int!
    openingBid: Int!
    currentBidValue: Int!
    closingDate:String!
    lot: Int!
    highestBidder: User
  }

  type Auth {
    token:ID!
    user: User
  }

  type Query {
    allAuctionItems:[auctionItem]
    allUsers:[User]
    oneAuctionItem(name: String!): auctionItem
    oneUser(name: String!): User

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
