const Router = require("express");
const router = new Router();
const postController = require("../controllers/tasks");

router.get("/", postController.getTasks);
router.post("/", postController.createTask);

module.exports = router;
