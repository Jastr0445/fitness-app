// this creates database // 
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connects to localhost // 
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// this tells express to listen for requests //
app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});

