const uid2 = require("uid2");
const Url = require("./model");
const validUrl = require("valid-url");

async function createUrl(req, res) {
  try {
    const original = req.body.url;
    if (validUrl.isUri(original)) {
      const searchUrl = await Url.findOne({ original: req.body.url });
      if (searchUrl) {
        res.status(402).json({ message: "Url already exist" });
      } else {
        let random = uid2(5);
        const searchRandom = await Url.findOne({ shorten: random });
        if (searchRandom) {
          random = uid2(5);
        }

        const newUrl = new Url({
          original,
          shorten: random
        });

        await newUrl.save();
        res.status(200).json(newUrl);
      }
    } else {
      res.status(401).json("Please fill a valid url yolo");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUrls(_, res) {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function getUrl(req, res) {
  try {
    const shortenUrl = req.params.url;
    const searchUrl = await Url.findOne({ shorten: shortenUrl });
    const originalUrl = searchUrl.original;

    searchUrl.visits += 1;
    await searchUrl.save();
    return res.redirect(originalUrl);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports.createUrl = createUrl;
module.exports.getUrls = getUrls;
module.exports.getUrl = getUrl;
