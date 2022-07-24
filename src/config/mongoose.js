require("dotenv").config();
const mongoose = require("mongoose");

mongoose.Promise = Promise;

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASSWORD;
const CLUSTER = process.env.DB_CLUSTER;
const NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${USER}:${PASS}@${CLUSTER}/${NAME}?retryWrites=true&authSource=admin&w=majority`;

exports.connectDatabase = async () => {
  try {
    const dbUrl =
      process.env.NODE_ENV === "development"
        ? "mongodb://localhost:27017/moolre-test"
        : URL;

    await mongoose.connect(dbUrl, { autoCreate: true });

    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
    }

    mongoose.connection.on("error", (error) => {
      console.log("MongoDB connection error:", error);
      process.exit(-1);
    });

    return mongoose.connection;
  } catch (error) {
    console.log("Error connecting to database:> ", error);
  }
};
