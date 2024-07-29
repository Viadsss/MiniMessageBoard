const asyncHandler = require("express-async-handler");

class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

const createNewMessage = async (req, res) => {
  
}