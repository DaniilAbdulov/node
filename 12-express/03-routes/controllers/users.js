//users
const getUsersHandler = (req, res) => {
    res.send("Get users route");
};
const getSingleUserHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get user route userId ${req.params.userId}`);
};
const postUsersHandler = (req, res) => {
    res.send("Post users route");
};
module.exports = {
    getUsersHandler,
    getSingleUserHandler,
    postUsersHandler,
};
