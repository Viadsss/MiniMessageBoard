const asyncHandler = require("express-async-handler");
const messages = require("../db/messages");

exports.indexGet = asyncHandler(async (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
