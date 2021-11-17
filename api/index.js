const express = require("express");
const app = express();

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ Hello: "World" });
});
