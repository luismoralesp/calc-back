// Update with your config settings.
require('dotenv').config('.env');

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
