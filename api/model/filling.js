import mongoose from "mongoose";

const Filling = mongoose.model(
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

export default Filling