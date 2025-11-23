import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import webhookRoutes from "../routes/webhook.js";
import messageRoutes from "./routes/messages.js";
import timelineRoutes from "./routes/timeline.js";
import branchRoutes from "./routes/branches.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/webhook", webhookRoutes);
app.use("/messages", messageRoutes);
app.use("/timeline", timelineRoutes);
app.use("/branches", branchRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("DB Error:", err));

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});
