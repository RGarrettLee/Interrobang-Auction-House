const db = require('../config/connection');
const {User, AuctionItem} = require('../models');
const auctionItemData = require('./auctionItem.json')

db.once('open', async()=>{
   await AuctionItem.deleteMany({});
    
    const auctionItem = await AuctionItem.insertMany(auctionItemData);
    process.exit(0);
});