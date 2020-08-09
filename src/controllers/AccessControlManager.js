/**
 * AccessControlManager.js
 * 
 */

const keystone = require('../../libs/keyston');

const config = {
  //Admin can acces to all
  default: ({ authentication }) => authentication.item && authentication.item.isAdmin,

  //Users can access only their own data
  User: ({ authentication, operation }) => {
    if (['auth'].includes(operation)) {
      return true;
    }
    const validate = { id: authentication.item.id };

    if (['read', 'update'].includes(operation)) {
      return validate;
    }
    return false;
  },

  //User can access only their own facturation
  Facturation: ({ authentication: { item }, operation }) => {
    const validate = { user: { id: item.id } };
    if (['read'].includes(operation)) {
      return validate;
    }
    return false;
  },

  //Users can acces only their own subscriptions
  Subscription: ({ authentication: { item }, operation }) => {
    const validate = { user: { id: item.id } };
    if (['read'].includes(operation)) {
      return validate;
    }
    return false;
  },

  //Users can acces only their own history
  History: ({ authentication: { item }, operation }) => {
    const validate = { user: { id: item.id } };
    if (['read'].includes(operation)) {
      return validate;
    }
    return false;
  },

  //Users can acces only their own subscripted cals
  Calc: ({ authentication: { item }, operation }) => {
    const validate = { subscription: { user: { id: item.id } } };
    if (['read'].includes(operation)) {
      return validate;
    }
    return false;
  },

  //Anyone can acces to images
  Image: false,

  //Anyone can acces to variables
  Variable: true,

  //Anyone can acces to keywords
  Keyword: true,
};

module.exports = {

  acm() {
    const access = (params) => {
      const defaults = config.default(params);
      if (defaults) {
        return true;
      }
      if (typeof config[params.listKey] === 'function') {
        return config[params.listKey](params);
      }

      return config[params.listKey];
    };

    return access;
  }
}