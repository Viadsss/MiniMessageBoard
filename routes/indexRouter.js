const express = require("express");
const router = express.Router();
const messages = require("../db/messages");

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
