const express = require("express");
//const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`The server is listening on port, http://localhost:${PORT}`);
});
