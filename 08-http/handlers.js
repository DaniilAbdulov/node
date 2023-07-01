const comments = require("./data.js");
const fs = require("fs");
const qs = require("querystring");

function getHome(req, res) {
    fs.readFile("./08-http/files/comment-form.html", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-type", "text/plain");
            res.end("Server error while loading HTML file");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.end(data);
        }
    });
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greetings from the http server</h1>");
    res.write("</div></body></html>");
    res.end();
}
function getText(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("This is plain text");
}
function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(comments));
}

function handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Page not found</h1>");
}

function postComment(req, res) {
    res.setHeader("Content-type", "text/plain");

    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        let body = "";
        req.on("data", (chunck) => {
            body += chunck.toString();
        });
        req.on("end", () => {
            try {
                const comment = qs.parse(body);
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write("<h1>Comment data was recevied</h1>");
                res.write('<a href="/">Submit one more comment</a>');
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid form data");
            }
        });
    } else if (req.headers["content-type"] === "application/json") {
        let commentJSON = "";

        req.on("data", (chunk) => {
            commentJSON += chunk;
        });

        req.on("end", () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end("Comment data was recevied");
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("Data must be in the JSON format or as form");
    }
}

module.exports = {
    getHTML,
    getText,
    getComments,
    handleNotFound,
    postComment,
    getHome,
};
