const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/:id", messageController.messageGet);

module.exports = router;
