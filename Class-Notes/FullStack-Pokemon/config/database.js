// Set up and connect to our database

const mongoose = require("mongoose");

function connectToDatabase() {
  // Cloud Database
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("Connected to mongoDB database!"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };

// ----------------------------------------

// Local Database
// mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017/pokemon"
//   )
//   .then(() => console.log("Connected to mongoDB database!"))
//   .catch((err) => console.log(err));
