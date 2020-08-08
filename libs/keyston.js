const { Keystone } = require('@keystonejs/keystone');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');
const initialiseData = require('../initial-data')

const PROJECT_NAME = 'calc';
const adapterConfig = { knexOptions: { connection: process.env.DATABASE } };

const keystone = new Keystone({
    name: PROJECT_NAME,
    adapter: new Adapter(adapterConfig),
    //onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

module.exports = keystone;