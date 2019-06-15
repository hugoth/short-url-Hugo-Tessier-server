const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  original: String,
  shorten: String,
  visits: Number
});

module.exports = Url;
