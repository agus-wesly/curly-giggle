const express = require("express");
const Router = express.Router();
const { messageController, deleteMessage } = require("../controller/messageController");

Router.get("/", messageController);
Router.delete("/", deleteMessage);

module.exports = Router;
