import mongoose from "mongoose";

export const connectToDB = async() => {
  await mongoose
    .connect(
      "mongodb+srv://Atreya-Chandan:Atreya786@my-db.0l8w9lc.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
};
