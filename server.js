const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const DBConnect = require("./utils/dbConnect");

const app = require("./index");

// database connection
mongoose.connect(`${process.env.DATABASE}`).then(()=>{
  console.log("DataBase is connected by mongoose");
})
// DBConnect();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.rainbow.bold);
});