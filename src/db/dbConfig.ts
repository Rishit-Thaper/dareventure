import mongoose from "mongoose";
import { config } from "@/conf/config";
export const dbConnect = async () => {
  console.log("Connecting to DB...");
  try {
    const connection = await mongoose.connect(
      `${config.DB_URL}/${config.DB_NAME}`
    );
    console.log("Connected with DB at: ", connection.connection.host);
  } catch (error) {
    console.error("Error occured while connecting!!");
  }
};
