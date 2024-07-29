const express = require("express");
const router = express.Router();
const messages = require("../db/messages");

router.get("/", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ user: messageUser, text: messageText, added: new Date() });
  res.redirect("/");
});

module.exports = router;
