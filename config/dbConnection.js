import { dbUri } from "./envConfig.js";
import mongoose from "mongoose";

mongoose
  .connect(dbUri)
  .then(() => console.log("database is connected successfully")).catch((error)=>{
    console.log(error+" in connecting to db ");
  });

  export default mongoose.connect;
