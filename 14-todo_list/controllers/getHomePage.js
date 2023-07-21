const fs = require("fs");
function getHomePage(req, res) {
    fs.readFile("./files/page.html", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-type", "text/plain");
            res.end("Server error while loading HTML file");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.end(data); //передаем ответ
        }
    });
}
module.exports = { getHomePage };
