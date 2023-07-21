const express = require("express");
const tasksRouter = require("./tasks");

const { getHomePage } = require("../controllers/getHomePage");

const router = express.Router();

router.get("/", getHomePage);
router.use("/tasks", tasksRouter);

module.exports = router;
