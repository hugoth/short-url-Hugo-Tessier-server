const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.post("/url/create", controller.createUrl);
router.get("/url", controller.getUrls);
module.exports = router;
