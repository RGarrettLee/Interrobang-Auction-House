const { AuthenticationError } = require('apollo-server-express');

const { User, AuctionItem } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    allUsers: async () => {
      return User.find().populate('auctionItem');
    },

    allAuctionItems: async () => {
      return AuctionItem.find();
    },

    oneUser: async (parent, { Email }) => {
      return User.findOne({ Email });
    },

    oneAuctionItem: async (parent, { name }) => {
      return AuctionItem.findOne({ name });
    },
  },

  Mutation: {
    addUser: async (parent, { Email, Password }) => {

      console.log("creating");
      const user = await User.create({ Email, Password });

      const token = signToken(user);
      return {user,token};
    },

    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ Email: email  });

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

    removeUser: async (parent, { profileId }) => {
      return User.findOneAndDelete({ _id: profileId });
    },


    addAuctionItem: async (parent,{ name, images, itemDescription, artistName, origin, artistInfo, dateProduced, size, artMedium, valuation, openingBid,closingDate, lot })=>{
      const currentBidValue = openingBid;
      return AuctionItem.create({ name, images, itemDescription, artistName, origin, artistInfo, dateProduced, size, artMedium, valuation, openingBid, currentBidValue,closingDate, lot });
    },

    removeAuctionItem: async(parent, { auctionItemId }) =>{

      return AuctionItem.findOneAndDelete({_id: auctionItemId})
    },
    updateUser:async (parent,{FirstName, LastName, Email, Password, Address, City, Province, ZipCode, Phone}) =>{
      return User.findOneAndUpdate({FirstName, LastName, Email, Password, Address, City, Province, ZipCode, Phone})
    },
  },
};

module.exports = resolvers;

