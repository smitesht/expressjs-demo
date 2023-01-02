const express = require("express");
const { v4: uuidv4 } = require("uuid");

const tasksRouter = express.Router();

const tasks = [];

tasksRouter.get("/", (req, resp) => {
  console.log("retrieve all the tasks");
  resp.status(200).send(tasks);
});

tasksRouter.post("/", (req, resp) => {
  console.log("new task");
  task = req.body;
  console.log(task.task);
  taskJson = {
    id: uuidv4(),
    task: task.task,
  };

  tasks.push(taskJson);
  resp.status(200).send(tasks);
});

tasksRouter.put("/:id", (req, resp) => {
  const { id } = req.params;
  const taskval = req.body.task;
  const foundTask = tasks.find((task) => task.id === id);
  foundTask.task = taskval;
  console.log(foundTask);
  resp.status(200).send(foundTask);
});

tasksRouter.get("/:id", (req, resp) => {
  const { id } = req.params;
  const foundTask = tasks.find((task) => task.id === id);

  console.log(foundTask);
  resp.status(200).send(foundTask);
});

module.exports = tasksRouter;
