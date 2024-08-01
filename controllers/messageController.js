const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

exports.messageGet = asyncHandler(async (req, res) => {
  const message = await db.getMessage(req.params.id);
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("messageDetail", { title: "Message Details", message: message });
});
