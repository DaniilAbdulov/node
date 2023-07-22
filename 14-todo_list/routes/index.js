const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controllers/getHomePage");
const tasksRouter = require("./tasks");

router.get("/", getHomePage);
router.use("/tasks", tasksRouter);

module.exports = router;
