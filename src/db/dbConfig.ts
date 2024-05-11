import mongoose from "mongoose";
import { config } from "@/conf/config";
export const dbConnect = async () => {
  console.log("Connecting to DB...");
  const connectionString = `${config.DB_URL}/${config.DB_NAME}`;
  try {
    await mongoose
      .connect(connectionString)
      .then(() => {
        console.log("Connected with DB");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error("Error occured while connecting:", error);
  }
};
