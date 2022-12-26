import mongoose from "mongoose";

const Model = mongoose.model(
  "model",
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
  })
);

export default Model;
