
exports.up = function(knex) {
  return knex.schema.createTable("usuarios", table => {
    table.increments('id').unsigned().primary()
    table.string("nome").notNullable()
    table.string("sobrenome").notNullable()
    table.string("email").unique().notNullable()
    table.string("senha").notNullable()
    table.timestamps(false, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("usuarios")
};
