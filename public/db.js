
const mongoose  = require('mongoose')
  const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://SaurabhPandey:vk18hm45@ecommerceapp.btpnlgb.mongodb.net/ecommerce"
    );
    console.log("Connected to mongoDb database");
  } catch (error) {
    console.log("Error in MongoDB");
  }
};  

module.exports = connectDB

