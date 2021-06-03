//  set up dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// set up express
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// set up express app and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// set up mongo database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

})

// create routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// start server
app.listen(PORT, function () {
  console.log(`App listening on Port ${PORT}!`);
});
