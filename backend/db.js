const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://anilmandal70047:mjGy0I8utHybGN92@cluster1.4t1rs.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster1';

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
