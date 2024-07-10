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
    },
    password: {
      type: String,
    },
    products: [
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
