const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
const dashboardApi = require("./controllers/dashboardController");

app.use(cors());
app.use(express.json());

// connect the dashboard collection
app.use("/", dashboardApi);

// server connection
app.listen(2345, async () => {
  try {
    await connect();
    console.log("Server Connected Successfully!,2345");
  } catch {
    console.error("Failed to Connect!");
  }
});
