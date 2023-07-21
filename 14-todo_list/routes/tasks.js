//C:\Users\Daniil\Documents\node\14-todo_list\routes\tasks.js
const Router = require("express");
const router = new Router();
const postController = require("../controllers/tasks");

router.get("/", postController.getTasks);
router.post("/", postController.createTask);
router.delete("/", postController.deleteTask);

module.exports = router;
