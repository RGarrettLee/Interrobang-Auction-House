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

    closingDate: {
        type:Number,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },


    // Do we need an array here, as I am thnking there will be only one highest bidder, so I do not think that we need an array here.
    highestBidder:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
});

const auctionItem = model('auctionItem', auctionItemSchema);

module.exports = auctionItem;
