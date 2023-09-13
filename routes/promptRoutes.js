const express = require("express");
const { promptInput, promptDelete } = require("../controller/promptController");
const { auth, isUser } = require("../middlewares/auth");
const promptRouter = express.Router();

promptRouter
  .post("/promptInput", auth, isUser, promptInput)
  .post("/deleteprompt", auth, isUser, promptDelete);

module.exports = promptRouter;
