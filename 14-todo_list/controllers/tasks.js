//C:\Users\Daniil\Documents\node\14-todo_list\controllers\tasks.js
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
    async deleteTask(req, res) {
        const taskId = req.params.id;
        db.query("DELETE FROM tasks WHERE ID ($1)", [taskId], (err, result) => {
            if (err) throw err;
            res.redirect("/");
        });
    }
}
module.exports = new PostController();
