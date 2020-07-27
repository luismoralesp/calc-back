const keystone = require('../../../libs/keyston');
const { Relationship, DateTime } = require('@keystonejs/fields');
const { acm } = require('../../controllers/AccessControlManager');

module.exports = keystone.createList('Subscription', {
    fields: {
        date: { type: DateTime },
        calc: {
            type: Relationship,
            ref: 'Calc.subscription',
            many: false
        },
        user: {
            type: Relationship,
            ref: 'User',
            many: false
        }
    },
    access: acm()
});