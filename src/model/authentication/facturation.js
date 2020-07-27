const keystone = require('../../../libs/keyston');
const { Text, DateTime, Decimal, Relationship } = require('@keystonejs/fields');
const { acm } = require('../../controllers/AccessControlManager');

module.exports = keystone.createList('Facturation', {
    fields: {
        name: { type: Text },
        date: {
            type: DateTime,
        },
        costs: {
            type: Text
        },
        total: {
            type: Decimal
        },
        user: {
            type: Relationship,
            ref: 'User.facturations'
        }
    },
    access: acm()
});