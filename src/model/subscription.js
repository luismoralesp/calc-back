const keystone = require('../../libs/keyston');
const { Relationship, DateTime } = require('@keystonejs/fields');

module.exports = keystone.createList('Subscription', {
    fields: {
        date: { type: DateTime },
        calc: {
            type: Relationship,
            ref: 'Calc',
            many: false
        },
        user: {
            type: Relationship,
            ref: 'User',
            many: false
        }
    },
    access: {
      auth: true,
    },
});