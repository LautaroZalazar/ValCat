import mongoose from "mongoose";

export default filling = mongoose.model(
    "fillin",
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
