const express = require("express");
const jobRouter = require("./job.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/jobs", jobRouter);
}

module.exports = routerApi;
