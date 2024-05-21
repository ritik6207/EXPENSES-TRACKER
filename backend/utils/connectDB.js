const mongoose = require("mongoose");

// Connect the mongodb
const connectDB = mongoose
  .connect("mongodb://localhost:27017/expenses-tracker")
  .then(() => console.log("DB Connected"))
  .catch(e => console.log(e));

module.exports = connectDB;
