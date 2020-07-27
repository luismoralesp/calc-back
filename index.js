

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const keystone = require('./libs/keyston');
const { as } = require('./src/controllers');
const model = require('./src/model');

model();

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      authStrategy: as(),
    }),
  ],
};
