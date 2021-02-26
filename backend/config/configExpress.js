const express = require("express");
const consign = require("consign");
const cors = require("cors");

module.exports = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  consign().include("controllers").into(server);

  return server;
};
