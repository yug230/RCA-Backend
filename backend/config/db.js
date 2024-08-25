const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");


dotenv.config(); // Ensure environment variables are loaded

const connectDB = async () => {
  try {
    // Load environment variables from.env file
    MONGO_URI = process.env.MONGO_URI
    console.log(MONGO_URI);

    // || "mongodb+srv://yug:KnTaHfhkJd7ftZui@cluster0.67oos7e.mongodb.net/myMongo?retryWrites=true&w=majority&appName=Cluster0"
    const conn = await mongoose.connect(MONGO_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
