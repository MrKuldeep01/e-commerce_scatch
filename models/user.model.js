import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
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
    contactNum:{
      type: Number,
      unique:true,
    } ,
    image: {
        type:String,
        default:'',
    }
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
