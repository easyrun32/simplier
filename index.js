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

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received");
  console.log("Closing http server.");
  server.close(async () => {
    console.log("Http server closed.");
    // handle any necessary disconnect logic such as closing a DB connection
    console.log("Connections closed.");
    process.exit();
  });
});
