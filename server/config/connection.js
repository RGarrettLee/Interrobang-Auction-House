const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://Sidewinder:47Polarbears@cluster0.qfyff7o.mongodb.net/mern-set-up?retryWrites=true&w=majority',// 'mongodb://127.0.0.1:27017/mern-set-up',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
