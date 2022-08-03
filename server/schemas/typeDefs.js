const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    FirstName: String!
    LastName: String!
    Email: String!
    Password: String!
    Address: String!
    City: String
    Province: String
    ZipCode: String
    Phone: Int
    BiddedItems:[auctionItem]
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
    oneUser(email: String!): User

  }
  type Mutation {
    addUser(FirstName: String!, LastName: String!, Email: String!, Password: String!): Auth
    login(email: String!, password: String!): Auth
    addAuctionItem(name: String!, images: String!, itemDescription: String!,artistName: String!, origin: String!, artistInfo: String, dateProduced: String, size: String, artMedium:String, valuation:Int, openingBid:Int, closingBidValue:Int, closingDate:String, lot:Int, highestBidder: Int!):auctionItem
    updateUser(FirstName: String!, LastName: String!,Email: String!, Password: String!, Address: String!,City: String!,Province: String!,ZipCode:String,Phone: Int): Auth
    removeUser(userId: ID!): User
    removeAuctionItem(auctionItemId: ID!): auctionItem
    biddedItem(auctionItemID: ID):User
  }
`;

module.exports = typeDefs;
