const db = require('./connection');
const {user, auctionItem} = require('../models');

db.once('open', async()=>{
    await auctionItem.deleteMany();
    
    const auctionItem = await auctionItem.insertMany([
        {
            name:'the best picture',
            images:'thebest.png',
            closingDate:11,
            price:11,
            highestBidder:1
        }
    ])
});