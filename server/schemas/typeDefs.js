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
    allAuctionItems:[auctionItem]
    allUsers:[User]
    oneAuctionItem(name: String!): auctionItem
    oneUser(name: String!): User

  }
  type Mutation {
    addUser(Firstname: String!,LastName: String!, Email: String!, Password: String!, Address: String!,City: String,Province: String,ZipCode: String,Phone: Int): Auth
    login(email: String!, password: String!): Auth
    addAuctionItem(name: String!, images: String!,price:Int!,closingDate: Int!,highestBidder: Int!):auctionItem
# // edit user mutation
    updateUser(FirstName: String!, LastName: String!,Email: String!, Password: String!, Address: String!,City: String!,Province: String!,ZipCode:String,Phone: Int): Auth
    removeUser(userId: ID!): User
    removeAuctionItem(auctionItemId: ID!): auctionItem
  }
`;

module.exports = typeDefs;
