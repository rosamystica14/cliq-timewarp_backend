import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Webhook hit:", req.body);

  try {
    const saved = await Event.create({
      user: req.body.user,
      message: req.body.message,
      raw: req.body
    });

    res.json({ status: "saved", id: saved._id });
  } catch (err) {
    console.log("DB Error:", err);
    res.status(500).json({ error: "DB Save Failed" });
  }
});

export default router;
