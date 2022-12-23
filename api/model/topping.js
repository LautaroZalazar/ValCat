import mongoose from "mongoose";

const Topping = mongoose.model(
  "topping",
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true
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

export default Topping