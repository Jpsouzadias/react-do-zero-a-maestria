const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: String,
        title: String,
        likes: Array,
        comments: Array,
        userId: mongoose.ObjectId,
        userName: String,
    },
    {
        timeseries: true
    }
)

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;