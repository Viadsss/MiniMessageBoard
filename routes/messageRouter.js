const express = require("express");
const router = express.Router();
const messages = require("../db/messages");

router.get("/:id", (req, res) => {
  const message = messages[req.params.id];
  res.render("messageDetail", { title: "Message Details", message: message });
});

module.exports = router;
