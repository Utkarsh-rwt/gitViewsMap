import mongoose from "mongoose";
import config from "./config";

export default async function ConnectToDB() {
  await mongoose.connect(config.MONGO_URI);
  console.log("connected To DB");
}