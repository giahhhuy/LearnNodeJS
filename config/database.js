const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect Success!",process.env.MONGO);
  } catch (error) {
    console.log("Connect Error!",error.message);
  }
}