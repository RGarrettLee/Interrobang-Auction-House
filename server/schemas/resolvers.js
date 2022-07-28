const { AuthenticationError } = require('apollo-server-express');
const { user,auctionItem } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return user.find();
    },

    auctionItems: async () => {
      return Profile.find();
    },

    user: async () => {
      return user.findOne({_id:userId});
    },

    auctionItem: async () => {
      return aucyion.findOne({_id:auctionItemId});
    },
  },

  Mutation: {
    adduser: async (parent, { name, email, password, address }) => {

      const user = user.create({ name,email,password,address });
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
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    removeuser: async (parent, { profileId }) => {
      return user.findOneAndDelete({ _id: profileId });
    },

    addauctionItem: async (parent,{name, images, closingDate, price, highestBidder})=>{
      return auctionItem.create({ name, images, closingDate, price, highestBidder});
    },

    removeauctionItem: async(parent,{auctionItemId}) =>{
      return auctionItem.findOneAndDelete({_id: auctionItemId})
    },
  },
};

module.exports = resolvers;
