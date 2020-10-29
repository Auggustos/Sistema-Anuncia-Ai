
exports.up = function(knex) {
  return knex.schema.createTable("usuarios", table => {
    table.increments('id').unsigned().primary()
    table.string("nome").notNullable()
    table.string("sobrenome").notNullable()
    table.string("email").unique().notNullable()
    table.string("usuario").unique().notNullable()
    table.integer("perfil").notNullable()
    table.string("endereco").notNullable()
    table.string("celular", 25).notNullable()
    table.boolean("pagamento_cartao").notNullable()
    table.string("senha").notNullable()
    table.timestamps(false, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("usuarios")
};
