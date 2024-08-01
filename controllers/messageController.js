const asyncHandler = require("express-async-handler");
const messages = require("../db/messages");

exports.messageGet = asyncHandler(async (req, res) => {
  const message = messages[req.params.id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("messageDetail", { title: "Message Details", message: message });
});
