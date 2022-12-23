import mongoose from "mongoose";

export default model = mongoose.model(
    "model",
    mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: [{
            type: String
        }]
    })
)
