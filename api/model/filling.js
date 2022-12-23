import mongoose from "mongoose";

export default filling = mongoose.model(
  "filling",
  mongoose.Schema({
    name: {
      type: String,
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
