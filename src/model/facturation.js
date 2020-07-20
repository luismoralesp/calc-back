const keystone = require('../../libs/keyston');
const { Text, DateTime, Decimal } = require('@keystonejs/fields');

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
        }
    }
});