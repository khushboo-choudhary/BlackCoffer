const express = require("express");

const app = express();
app.use(express.json());

// server connection
app.listen(2345, async () => {
  try {
    await connect();
    console.log("Server Connected Successfully!");
  } catch {
    console.error("Failed to Connect!");
  }
});
