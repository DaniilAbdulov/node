const express = require("express");
const {
    getCommentsHandler,
    getComHandler,
    postCommentHandler,
    deleteComHandler,
} = require("../controllers/comments.js");

const router = express.Router();
router.get("/", getCommentsHandler);
router.post("/", postCommentHandler);
router.get("/:commentId", getComHandler);
router.delete("/:commentId", deleteComHandler);

module.exports = router;
