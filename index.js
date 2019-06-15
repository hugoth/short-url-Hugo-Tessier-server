const express = require("express");

const { setUpMiddlewares } = require("./services/middlewares");
const { connect } = require("./services/database");

const app = express();
connect();
setUpMiddlewares(app);

app.use("/api", require("./api"));

const url = require("./api/url/routes");
app.use(url);

app.listen(process.env.PORT || 3003, () => {
  console.log("Server started");
});
