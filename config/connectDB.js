const mongoose = require("mongoose");
require('dotenv/config');

const dbConfig = process.env.MONGODB_URI || "mongodb://localhost/workout";


async function connectDB(){
   await mongoose.connect(dbConfig,{
      useNewUrlParser: true,
      useUnifiedTopology: true  
  }, function() {
      console.log("connected to DB")
  });
}


module.exports = connectDB;