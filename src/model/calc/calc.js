const keystone = require('../../../libs/keyston');
const { Relationship, Text, Virtual } = require('@keystonejs/fields');
const { acm } = require('../../controllers/AccessControlManager');

module.exports = keystone.createList('Calc', {
    fields: {
        name: { 
            type: Text,
            isUnique: true, 
        },
        description: { type: Text },
        formula: { type: Text },
        price: { type: Number },
        variables: {
            type: Relationship,
            ref: 'Variable',
            many: true
        },
        keywords: {
            type: Text,
            many: true
        },
        image: {
            type: Relationship,
            ref: 'Image',
            many: false
        },
        getResult: {
            type: Virtual,
            args: [{name: 'formula', type: 'String'}, {name: 'usedValues', type: 'String'}],
            resolver:  async (_, { formula, usedValues }) => {
                const result = await keystone.adapters.KnexAdapter.knex.raw(`SELECT get_result('${formula}', '${usedValues}'::jsonb)`);
                return result.rows[0].get_result;
            }
        },
        subscription: {
            type: Relationship,
            ref: 'Subscription.calc'
        }
    },
    access: acm()
});