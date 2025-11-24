import express from "express";
const router = express.Router();

// POST /webhook
router.post("/", (req, res) => {
  console.log("Webhook hit:", req.body);
  res.json({ status: "Webhook received" });
});

export default router;
