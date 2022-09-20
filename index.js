const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const colors = require("colors");
const tourRouter = require("./Routes/Tour.routes");
//middleWare
app.use(express.json());
app.use(cors());
 
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/tour", tourRouter)

module.exports = app;


