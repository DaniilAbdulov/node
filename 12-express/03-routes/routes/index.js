const express = require("express");
const commentsRouter = require("./comments");
const usersRouter = require("./users");
const { getRootHandler } = require("../controllers/root");

const router = express.Router();

router.get("/", getRootHandler);
router.use("/comments", commentsRouter); //будет работать для всех путей начинающихся на /comments
router.use("/users", usersRouter); //для всех путей на users

module.exports = router;
