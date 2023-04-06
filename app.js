const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.get("/greeting", (req, res) => {
  res.send("<h1><b>Welcome!</b></h1>");
});
app.get("/nav", (req, res) => {
  res.send("<h1><b>Navigation Page!</b></h1>");
});
app.get("/goodbye", (req, res) => {
  res.send("h1><b>Thanks for visiting!</b></h1>");
});
app.get("/:key", (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
