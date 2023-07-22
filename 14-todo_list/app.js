const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(router);

app.listen(5000, () => {
    console.log("Server was launched");
});
