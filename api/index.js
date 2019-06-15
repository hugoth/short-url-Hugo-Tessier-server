const router = require("express").Router();

router.use("/url", require("./url/routes"));

module.exports = router;
