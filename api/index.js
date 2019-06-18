const router = require("express").Router();

router.use("/url", require("./urls/routes"));

module.exports = router;
