const { Keystone } = require('@keystonejs/keystone');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');
const initialiseData = require('../initial-data')

const PROJECT_NAME = 'calc';
const adapterConfig = { knexOptions: { connection: 'postgres://postgres:dbcalc%23123@calc.c0ilzolikew6.us-east-2.rds.amazonaws.com/calc' } };

const keystone = new Keystone({
    name: PROJECT_NAME,
    adapter: new Adapter(adapterConfig),
    //onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

module.exports = keystone;