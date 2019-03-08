const express = require("express");
const Coworkers = require("./coworkers/coworkersModel");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json("it's working!");
});

server.get("/coworkers", async (req, res) => {
  const rows = await Coworkers.getAll();
  res.status(200).json(rows);
});

module.exports = server;
