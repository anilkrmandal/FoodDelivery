const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI; // Get the URI from the environment variable

const mongoDB = async () => {
  try {
    // Try connecting to MongoDB
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    // Fetch data from the "fooddata" collection
    const fetched_data = await mongoose.connection.db.collection("fooddata").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodcategory").find({}).toArray();

    global.food_items = fetched_data;
    global.foodCategory = foodCategory;

  } catch (err) {
    console.log("---", err);
  }
};

module.exports = mongoDB;
