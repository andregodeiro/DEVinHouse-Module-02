const express = require("express");
const app = express();

//Request

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

//Port
app.listen(3333);
