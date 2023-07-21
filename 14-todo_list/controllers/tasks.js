const db = require("../db");
class PostController {
    async getTasks(req, res) {
        db.query("SELECT * FROM tasks ORDER BY id ASC", (err, result) => {
            if (err) throw err;
            res.send(result.rows);
        });
    }
    async createTask(req, res) {
        const task = req.body.task;
        db.query(
            "INSERT INTO tasks (task) VALUES ($1)",
            [task],
            (err, result) => {
                if (err) throw err;
                res.redirect("/");
            }
        );
    }
}
module.exports = new PostController();