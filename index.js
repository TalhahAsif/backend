import express from "express";

const app = express();
const PORT = 5000;

const getMethodandURL = (req, res, next) => {
  console.log(Date.now());
  const method = req.method;
  const url = req.url;
  console.log("method==>", method);
  console.log("url==>", url);
  next();
};

let noOflimit = 5;
const limitRequest = (req, res, next) => {
  if (noOflimit > 0) {
    noOflimit--;
    console.log("Remaining limit:", noOflimit);
    next();
  } else {
    res.status(500).send("Too many requests");
  }
};

const requestTime = (req, res, next) => {
  const requestTime = new Date().getMilliseconds();
  console.log(requestTime);
  next();
};

app.get("/", requestTime, (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
