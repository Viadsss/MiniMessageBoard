const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

exports.indexGet = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
