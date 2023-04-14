const express = require("express");
const fs = require("fs");
let product = JSON.parse(fs.readFileSync("product.json","utf-8"));
let user =JSON.parse(fs.readFileSync("user.json","utf-8"));

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/product",(req,res)=>{
res.json(product)
})

app.get("/user",(req,res)=>{
  res.json(user);
})
app.post('/user', (req, res) => {
  const { item } = req.body;
  user.push(item);
  fs.writeFileSync("user.json", JSON.stringify(user));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});