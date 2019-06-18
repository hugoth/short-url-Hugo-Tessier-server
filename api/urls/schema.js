const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  original: String,
  shorten: String,
  visits: { type: Number, default: 0 }
});

module.exports = UrlSchema;
