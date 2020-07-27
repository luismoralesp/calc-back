module.exports = function() {
    const calc = require('./calc');
    const subscription = require('./subscription');
    const authentication = require('./authentication');
    const image = require('./image');

    return {
        calc,
        subscription,
        authentication,
        image
    }
    
}