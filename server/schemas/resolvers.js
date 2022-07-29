const { AuthenticationError } = require('apollo-server-express');
const { User, AuctionItem } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },

    auctionItem: async () => {
      return AuctionItem.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id:userId });
    },

     auctionItem: async (parent, { auctionItemId }) => {
       return AuctionItem.findOne({_id:auctionItemId});
     },
  },

  Mutation: {
    addUser: async (parent, { name, email, password, address }) => {

      const user = await User.create({ name,email,password,address });
      const token = signToken(user);
      return {user,token};
    },

    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await User.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    removeUser: async (parent, { profileId }) => {
      return User.findOneAndDelete({ _id: profileId });
    },

    addAuctionItem: async (parent,{ name, images, closingDate, price, highestBidder })=>{
      return AuctionItem.create({ name, images, closingDate, price, highestBidder});
    },

    removeAuctionItem: async(parent, { auctionItemId }) =>{
      return AuctionItem.findOneAndDelete({_id: auctionItemId})
    },
  },
};

module.exports = resolvers;

