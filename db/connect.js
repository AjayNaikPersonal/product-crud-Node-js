const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGO_URI;

const connectDB = async () =>{
    return await mongoose.connect(connectionString ,{});
}

module.exports = connectDB