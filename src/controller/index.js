const keystone = require('../../libs/keyston');


module.exports = function(){
    keystone.extendGraphQLSchema({
        mutations: [{
            schema: 'getResult(formula: String, usedValues: String): Int',
            resolver: async (_, { formula, usedValues }) => {
                const result = await keystone.adapters.KnexAdapter.knex.raw(`SELECT get_result('${formula}', '${usedValues}'::jsonb)`);
                return result.rows[0].get_result
            },
        }]
    });
}