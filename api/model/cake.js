import mongoose from "mongoose";

const Cake = mongoose.model(
  "cake",
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
      },
    ],
    size: {
      type: String,
      required: true,
      enum: ["Small", "Medium", "Large"],
      default: "Small",
    },
    slice: {
      type: Number,
      required: true,
    },
  })
);

export default Cake
