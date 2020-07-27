const keystone = require('../../../libs/keyston');
const { Password, Relationship, Text, Checkbox } = require('@keystonejs/fields');
const { acm } = require('../../controllers/AccessControlManager');

module.exports = keystone.createList('User', {
    fields: {
      name: { type: Text },
      email: {
        type: Text,
        isUnique: true,
      },
      isAdmin: {
        type: Checkbox,
      },
      password: {
        type: Password,
      },
      facturations: {
        type: Relationship,
        ref: 'Facturation.user',
        many: true
      }
    },

    access: acm()
});

