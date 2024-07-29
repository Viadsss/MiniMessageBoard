const express = require("express");
const router = express.Router();
const messages = require("../db/messages");

router.get("/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("messageDetail", { title: "Message Details", message: message });
});

module.exports = router;
