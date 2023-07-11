import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan("tiny"));
app.use("/", (req, res, next) => {
    let data = "";
    req.on("data", (chunk) => {
        data += chunk;
    });
    req.on("end", () => {
        const parsedJSON = JSON.parse(data);
        req.body = parsedJSON;
        next();
    });
});
app.use((req, res) => {
    console.log(req.body);
    return res.send("This is expre erver");
});

app.listen(5000, () => {
    console.log("Server is listening");
});
