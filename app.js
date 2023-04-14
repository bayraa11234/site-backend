const express = require("express");
const fs = require("fs");
const cors = require("cors");
let product = JSON.parse(fs.readFileSync("product.json", "utf-8"));
let user = JSON.parse(fs.readFileSync("user.json", "utf-8"));

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get("/product", (req, res) => {
  res.json(product);
});

app.get("/user", (req, res) => {
  res.json(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const { user } = req.body;
  user.push(user);
  fs.writeFileSync("user.json", JSON.stringify(user));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
