const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, resp) => {
  resp.status(200).send({ name: "Smitesh" });
});

const userRouter = require("./routes/students");

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
