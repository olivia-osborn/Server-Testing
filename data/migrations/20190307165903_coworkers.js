exports.up = function(knex, Promise) {
  return knex.schema.createTable("coworkers", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("coworkers");
};
