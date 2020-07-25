const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//tells the app to use routes for all requests
app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/booksearch"


mongoose.connect(MONGODB_URI,{ useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
