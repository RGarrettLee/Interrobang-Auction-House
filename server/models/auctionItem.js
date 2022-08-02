const {Schema, model} = require('mongoose');

const auctionItemSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },

    images: {
        // What to expect here?
        type:String,
        required:true,
    },

    itemDescription: {
        type: String,
        required: true,
    },

    artistName: {
        type: String,
        required: true
    },

    origin: {
        type: String,
        required: true
    },

    artistInfo: {
        type: String
    },

    dateProduced: {
        type: String // change to date type
    },

    size: {
        type: String
    },

    artMedium: {
        type: String
    },

    valuation: {
        type: Number
    },

    openingBid: {
        type: Number
    },

    currentBidValue: {
        type: Number
    },

    closingDate: {
        type: String,
        required:true,
    },

    lot: {
        type: Number
    },

    // Do we need an array here, as I am thnking there will be only one highest bidder, so I do not think that we need an array here.
    highestBidder:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
});

const auctionItem = model('auctionItem', auctionItemSchema);

module.exports = auctionItem;
