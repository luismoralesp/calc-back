const keystone = require('../../libs/keyston');
const { Text, Decimal } = require('@keystonejs/fields');

module.exports = keystone.createList('Variable', {
    fields: {
        name: { type: Text },
        minValue: {
            type: Decimal,
        },
        maxValue: {
            type: Decimal
        }
    },
    access: {
      auth: true,
    },
});