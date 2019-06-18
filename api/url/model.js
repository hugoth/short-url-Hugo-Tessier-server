const mongoose = require("mongoose");
const UrlSchema = require("./schema");

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;
