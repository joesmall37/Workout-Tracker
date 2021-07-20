//  set up dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// import routes
const htmlRoutes = require("./controllers/api/htmlRoutes");
const apiRoutes = require("./controllers/api/apiRoutes");
// set up express
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// set up express app and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

})
// set up routes
app.use(htmlRoutes);
app.use(apiRoutes);

//  set up server
app.listen(PORT, function () {
  console.log(`App listening on Port ${PORT}!`);
});
