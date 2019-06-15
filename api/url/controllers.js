const uid2 = require("uid2");
const Url = require("./model");

async function createUrl(req, res) {
  const original = req.body.url;
  const searchUrl = await Url.findOne({ original: req.body.url });
  if (searchUrl) {
    res.status(400).json({ message: "Url already exist" });
  } else {
    const shorten = "https://short-url-Tessier-Hugo.herokuapp.com/" + uid2(5);
    const newUrl = new Url({
      original,
      shorten
    });

    await newUrl.save();
    res.json(newUrl);
    console.log(newUrl);
  }
}

async function getUrls(req, res) {
  const urls = await Url.find();
  res.status(200).json(urls);
}

module.exports.createUrl = createUrl;
module.exports.getUrls = getUrls;
