const express = require("express");

const app = express();
//Несколько обработчиков. Во всех, кроме последней, необходимо добавлять и вызывать next()
const firsHandler = (req, res, next) => {
    console.log("First handler");
    next();
};
const secondHandler = (req, res) => {
    console.log("Second handler");

    res.send("Response from express");
};

app.get("/", firsHandler, secondHandler);
app.listen(5000, () => {
    console.log("Server was launched");
});
