const Router = require("express");
const router = new Router();
const taskController = require("../controllers/tasks");

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.get("/:tasksId", taskController.getOneTask);
router.delete("/:tasksId", taskController.deleteTask);

module.exports = router;
