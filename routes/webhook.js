import express from "express";
import { saveIncomingMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/incoming", saveIncomingMessage);

export default router;
