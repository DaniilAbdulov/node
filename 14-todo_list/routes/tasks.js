const Router = require("express");
const router = new Router();
const taskController = require("../controllers/tasks");

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.delete("/:tasksId", taskController.deleteTask);

module.exports = router;
