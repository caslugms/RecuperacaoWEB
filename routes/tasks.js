const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); 
const { getTasks, createTask} = require("../controllers/tasksController");

router.get("/", auth, getTasks);

router.post("/", auth, createTask);

module.exports = router;
