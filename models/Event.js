import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  user: String,
  message: String,
  raw: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Event", EventSchema);
