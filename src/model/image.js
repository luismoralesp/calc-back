const keystone = require('../../libs/keyston');
const { Text } = require('@keystonejs/fields');
const { acm } = require('../controllers/AccessControlManager');

module.exports = keystone.createList('Image', {
    fields: {
        name: { 
            type: Text,
            isUnique: true, 
        },
        type: { type: Text },
        url: { type: Text },
    },
    access: acm()
});