import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log("req==>", req);

  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));


