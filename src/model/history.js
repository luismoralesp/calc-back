const keystone = require('../../libs/keyston');
const { Relationship, Text, DateTime } = require('@keystonejs/fields');

module.exports = keystone.createList('History', {
    fields: {
        date: { type: DateTime },
        values: {
            type: Text,
        },
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