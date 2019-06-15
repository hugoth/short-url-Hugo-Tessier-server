const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  original: String,
  shorten: String
});

module.exports = Url;
