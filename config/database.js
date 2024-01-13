import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }
  try {
    /*  await mongoose.connect(process.env.MONGO_URI, {
      dbName: "provide",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); */
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};
