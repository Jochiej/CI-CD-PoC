const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to Padhop!");
});
app.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});
app.get("/home", (req, res) => {
  res.send("Welcome to your homepage!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
