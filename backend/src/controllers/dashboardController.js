const express = require("express");

const router = express.Router();
const Dashboard = require("../models/dashboardModels");

router.get("/", async (req, res) => {
  try {
    const data = await Dashboard.find().lean().exec();
    return res.send(data);
  } catch (err) {
    return res.send(err).status(400);
  }
});

module.exports = router;
