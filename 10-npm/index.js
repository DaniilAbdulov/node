const express = require("express");
const app = express();

app.get("/", function (require, response) {
    response.send("hello express");
});

app.listen(3000);
