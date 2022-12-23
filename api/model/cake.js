import mongoose from "mongoose";

const Cake = mongoose.model(
  "cake",
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number
    },
    description: {
      type: String,
      required: true,
    },
    default:{
      type: Boolean,
      default: false
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
    model: [{
      type: mongoose.Schema.ObjectId,
      ref: "model"
    }],
    filling: [{
      type: mongoose.Schema.ObjectId,
      ref: "filling"
    }],
    topping: [{
      type: mongoose.Schema.ObjectId,
      ref: "topping"
    }]
  })
);

export default Cake
