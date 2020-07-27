const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const keystone = require('../../libs/keyston');

module.exports = {
  as: () => keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
  })
};