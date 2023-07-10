const getCommentsHandler = (req, res) => {
    res.send("Get comments route");
};
const getComHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get Com route CommentId ${req.params.commentId}`);
};
const postCommentHandler = (req, res) => {
    res.send("Post comments route");
};
const deleteComHandler = (req, res) => {
    res.send(`Delete comments route ${req.params.commentId}`);
};

module.exports = {
    getCommentsHandler,
    getComHandler,
    postCommentHandler,
    deleteComHandler,
};
