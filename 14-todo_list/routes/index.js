//C:\Users\Daniil\Documents\node\14-todo_list\routes\index.js
const express = require("express");
const tasksRouter = require("./tasks");

const { getHomePage } = require("../controllers/getHomePage");

const router = express.Router();

router.get("/", getHomePage);
router.use("/tasks", tasksRouter);

module.exports = router;
