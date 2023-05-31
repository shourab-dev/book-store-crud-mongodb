const express = require("express");
//* INITIALIZE APP
const app = express();
app.use(express.json());

//* ENV
require("dotenv").config();

//* REQUIRE MONGOOSE
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("Error While Connected!");
  });

//* REQUIRE BOOKS ROUTE
const booksRoute = require("./routes/BookRoutes");
app.use("/books", booksRoute);

//* APP LISTENING
app.listen(process.env.APP_PORT);
