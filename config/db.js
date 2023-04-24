const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env'});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('da ket noi db');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
