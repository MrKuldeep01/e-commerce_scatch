import mongoose from "mongoose";
import { dbUri } from "../config/envConfig";

mongoose
  .connect(dbUri)
  .then(() => console.log("database is connected successfully")).catch((error)=>{
    console.log(error+" in connecting to db ");
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        addingTime: Date.now(),
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        addingTime: Date.now(),
      },
    ],
    contactNum: Number,
    image: {
        type:String,
        default:'',
    }
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
