const { processSQLFile } = require('../libs/migration');

exports.up = function (knex) {
  processSQLFile(knex, 'src/database/sql/get_result.sql');
};

exports.down = function (knex) {

};
