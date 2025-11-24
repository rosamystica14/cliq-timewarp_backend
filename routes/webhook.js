import express from "express";
import Message from "../models/Event.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Webhook hit:", req.body);

    // Create document in MongoDB
    await Message.create({
      user: req.body.user,
      message: req.body.message,
      rawData: req.body
    });

    res.json({ status: "saved", data: req.body });
  } catch (err) {
    console.error("DB Save Error:", err);
    res.status(500).json({ status: "error", msg: err.message });
  }
});

export default router;
