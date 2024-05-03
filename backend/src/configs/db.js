require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://kkhushboo321:SNPH4ovhHM3aJcby@cluster0.clm23bx.mongodb.net/dashboard?"
  );
  // return mongoose.connect(process.env.MONGODB_URL);
};
