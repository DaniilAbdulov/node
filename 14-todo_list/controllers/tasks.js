const db = require("../db");

class TaskController {
    async getTasks(req, res) {
        db.query("SELECT * FROM tasks ORDER BY id ASC", (err, result) => {
            if (err) throw err;
            res.send(result.rows);
        });
    }

    async getOneTask(req, res) {
        const taskId = req.params.taskId;
        db.query(
            "SELECT * FROM tasks WHERE id = $1", // Исправлено: id вместо ID
            [taskId],
            (err, result) => {
                if (err) throw err;
                res.send(result.rows[0]);
            }
        );
    }

    async createTask(req, res) {
        const { task } = req.body;
        db.query(
            "INSERT INTO tasks (task) VALUES ($1)",
            [task],
            (err, result) => {
                if (err) throw err;
                res.redirect("/");
                // res.send({ message: "Task created successfully" });
            }
        );
    }

    async deleteTask(req, res) {
        const taskId = req.params.taskId;
        db.query(
            "DELETE FROM tasks WHERE id = ($1)",
            [taskId],
            (err, result) => {
                if (err) throw err;
                // res.redirect("/");
                res.send({ message: "Task deleted successfully" });
            }
        );
    }
}

module.exports = new TaskController();
