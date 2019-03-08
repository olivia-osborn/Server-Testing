const db = require("../data/dbConfig");

async function insert(coworker) {
  const [id] = await db("coworkers").insert(coworker, "id");
  return db("coworkers")
    .where({ id })
    .first();
}

function getAll() {
  return db("coworkers");
}

function remove(id) {
  return db("coworkers")
    .where("id", id)
    .del();
}

module.exports = {
  insert,
  getAll,
  remove
};
