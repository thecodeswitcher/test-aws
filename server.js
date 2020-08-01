import express from "express";

const app = express();
app.get("*", (req, res) => {
  res.status(200).send("<h1>Hello from AWS</h1>");
});
app.listen(3000, () => console.log("listening on port 3000"));
