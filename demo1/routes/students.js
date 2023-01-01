const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

const users = [];

router.get("/", (req, resp) => {
  console.log("ALl Users");
  resp.status(200).send(users);
});

router.post("/", (req, resp) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  resp.status(200).send(users);
});

router.get("/:id", (req, resp) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  console.log(`User with ID ${req.params.id}`);
  resp.status(200).send(foundUser);
});

module.exports = router;
