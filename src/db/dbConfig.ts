import mongoose from "mongoose";
import { config } from "@/conf/config";
export const dbConnect = async () => {
  console.log("Connecting to DB...");
  const connectionString = `${config.DB_URL}/${config.DB_NAME}`;
  console.log("connectionString", connectionString);
  try {
    await mongoose
      .connect(connectionString)
      .then(() => {
        console.log("Connected with DB");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error occured while connecting:", error);
  }
};
