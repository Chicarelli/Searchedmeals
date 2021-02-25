const express = require("express");
const consign = require("consign");

module.exports = () => {
  const server = express();
  server.use(express.json());

  consign().include("controllers").into(server);

  return server;
};
