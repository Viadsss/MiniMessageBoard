const express = require("express");
const router = express.Router();
const newController = require("../controllers/newController");

router.get("/", newController.newGet);
router.post("/", newController.newPost);

module.exports = router;
