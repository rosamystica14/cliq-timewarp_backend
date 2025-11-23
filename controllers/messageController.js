import Message from "../models/Message.js";

export async function saveIncomingMessage(req, res) {
    try {
        const data = req.body; // Received from Cliq

        const msg = await Message.create({
            sender: data.user.user_id,
            text: data.text,
            timestamp: Date.now(),
            channel: data.channel_id
        });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
