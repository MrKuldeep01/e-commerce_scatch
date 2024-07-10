import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    model: String,
    discount: Number,
    textColor: { type: String, default: "black" },
    bgColor: { type: String, default: "gray" },
    panalColor: { type: String, default: "white" },
  },
  { timestamps: true }
);

export default mongoose.model("product", productSchema);
