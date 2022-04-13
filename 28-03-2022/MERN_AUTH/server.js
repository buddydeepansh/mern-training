//body-parser, express, mongoose
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
// initialize express
const app = express();

// applying middleware functions
// on body-parser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// pull mongoURI from keys.js
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connection successfull with mongodb cloud."))
  .catch((err) => console.log(err));

// Adding middleware
app.use(passport.initialize());
app.use("api/users", users);

// set a port to run the server
const port = process.env.port || 5000;
console.log(`Port is runnig on ${port}`);
