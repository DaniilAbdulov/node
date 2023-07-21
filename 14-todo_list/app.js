//C:\Users\Daniil\Documents\node\14-todo_list\app.js
const express = require("express");
const router = require("./routes/index");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(router);
app.listen(5000, () => {
    console.log("Server was launched");
});
