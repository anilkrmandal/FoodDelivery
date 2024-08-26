const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://anilmandal70047:mjGy0I8utHybGN92@cluster1.4t1rs.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster1';

const mongoDB = async () => {
  try {
    // Connect to MongoDB (no need for deprecated options)
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("fooddata").find({}).toArray();

    console.log(fetched_data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;


//Lsc8dxPWN2ZOfeeM
//anilmandal70047
//mjGy0I8utHybGN92

//mongodb+srv://anilmandal70047:mjGy0I8utHybGN92@cluster1.4t1rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
//mongoimport --uri "mongodb+srv://anilmandal70047:mjGy0I8utHybGN92@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1" --collection gofoodmern --type json --file "C:/Users/anil/Downloads/foodData2.json" --jsonArray
