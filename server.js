const express = require("express");
const coworkers = require("./coworkers/coworkersModel");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json("Hello World");
});

// server.get("/coworkers", async (req, res) => {
//   const rows = await coworkers.getAll();
//   res.status(200).json(rows);
// });

module.exports = server;
