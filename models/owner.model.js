import mongoose from "mongoose";
const ownerSchema = new mongoose.Schema(
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
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        addingTime: Date.now(),
      },
    ],
    contactNum: {
      type: Number,
      unique: true,
    },
    image: {
        type:String,
        default:'',
    }
  },
  { timestamps: true }
);

export default mongoose.model("owner", ownerSchema);
