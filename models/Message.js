import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: String,
    text: String,
    channel: String,
    timestamp: Number
});

export default mongoose.model("Message", messageSchema);
