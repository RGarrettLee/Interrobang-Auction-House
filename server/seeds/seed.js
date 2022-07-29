const db = require('../config/connection');
const {user, auctionItem} = require('../models');
const auctionItemData = require('./auctionItem.json')

db.once('open', async()=>{
    auctionItem.deleteMany({});
    
    const auctionItem = await auctionItem.insertMany(auctionItemData);
    process.exit(0);
});