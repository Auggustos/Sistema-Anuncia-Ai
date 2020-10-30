var knex = require('knex')({
  client: 'mysql2',
  connection: {
      host : 'mysql741.umbler.com',
      port: '41890',
      user : 'thiagosiqueira',
      password : 'srcobgvyr1',
      database : 'marketplaceappu',
   }
});
module.exports = knex