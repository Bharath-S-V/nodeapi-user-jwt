require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productroute = require("./routes/productRoute");
const errorMiddleware=require('./middleware/errorMiddleware')
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productroute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("node api is running on port", PORT);
    });
    console.log("connected to MongoDB");
  })
  .catch(() => {
    console.error();
  });
