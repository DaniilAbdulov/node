const db = require("../db");

class TaskController {
    async getTasks(req, res) {
        db.query("SELECT * FROM tasks ORDER BY id ASC", (err, result) => {
            if (err) throw err;
            res.send(result.rows);
        });
    }
    async createTask(req, res) {
        const { task } = req.body;
        db.query(
            "INSERT INTO tasks (task) VALUES ($1)",
            [task],
            (err, result) => {
                if (err) throw err;
                res.redirect("/");
            }
        );
    }
    async getOneTask(req, res) {
        const taskId = req.params.tasksId;
        db.query(
            "SELECT * FROM tasks WHERE id = ($1)",
            [taskId],
            (err, result) => {
                if (err) throw err;
                res.send(result.rows);
            }
        );
    }
    async deleteTask(req, res) {
        const taskId = req.params.tasksId;
        db.query(
            "DELETE FROM tasks WHERE id = ($1)",
            [taskId],
            (err, result) => {
                if (err) throw err;
                res.redirect("/");
            }
        );
    }
}

module.exports = new TaskController();
