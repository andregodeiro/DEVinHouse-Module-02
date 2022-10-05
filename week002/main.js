const express = require("express");
const app = express();

//Requests
app.get("/", (req, res) => {
  res.send("<h1>Pizzaria Divina Pizza</h1>");
});

//Port
app.listen(3333);
