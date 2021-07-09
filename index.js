const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
let port = 5000;
app.get("/", (req, res) => {
  res.json({ server: "task" });
});

app.listen(port, () => {
  console.log("SERVER RUNNING" + port);
});
