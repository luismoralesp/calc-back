const keystone = require('../../libs/keyston');
const { Relationship, Text } = require('@keystonejs/fields');

module.exports = keystone.createList('Calc', {
    fields: {
        name: { 
            type: Text,
            isUnique: true, 
        },
        description: { type: Text },
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
        }   
    },
    access: {
      auth: true,
    },
});