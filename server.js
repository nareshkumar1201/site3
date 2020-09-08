const express = require("express");
const connectDB = require("./config/db");
const custRoute = require("./Routes/cust");

const app = express();
connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use(bodyParser.json());
app.use(express.json());

app.use("/cust", custRoute);
// app.use((error, req, res, next) => {
//   // console.log("This is default error call in appjs --> ", error);
//   console.log("error data 12121212", error.data);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   const data = error.data;
//   res.status(status).json({ message: message, data: data });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res, next) => {
  console.log(`connected to server`);
});
