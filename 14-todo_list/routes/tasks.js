const Router = require("express");
const router = new Router();
const taskController = require("../controllers/tasks");

router.get("/", taskController.getTasks);
router.get("/:taskId", taskController.getOneTask);
router.post("/", taskController.createTask);
router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
