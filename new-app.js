const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>New Node Nginx App</h1>");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
