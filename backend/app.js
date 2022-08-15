const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

// Route imports
const product = require("./routes/ProductRoute");

app.use("/api/v2",product);

module.exports = app