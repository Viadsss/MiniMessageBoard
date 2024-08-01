const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const validateMessage = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Username can only contain alphabetic characters and spaces")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters"),

  body("text")
    .notEmpty()
    .withMessage("Text is required")
    .isLength({ max: 255 })
    .withMessage("Text Message maximum character limit is 255"),
];

exports.newGet = asyncHandler(async (req, res) => {
  res.render("form", { title: "New Message" });
});

exports.newPost = [
  validateMessage,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: "New Nessage",
        errors: errors.array(),
      });
    }
    const { username, text } = req.body;
    await db.insertMessage(username, text);
    res.redirect("/");
  }),
];
