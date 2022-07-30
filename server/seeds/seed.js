const db = require('../config/connection');

const { User, AuctionItem } = require('../models');
const auctionItemData = require('./auctionItem.json');
const userData = require('./userData.json');

db.once('open', async()=>{
    await AuctionItem.deleteMany({});
    await User.deleteMany({});
    
    await AuctionItem.create(auctionItemData);
    await User.create(userData);

    console.log('Successfully Seeded Database');

    process.exit(0);
});