const { GraphQLSchema,GraphQLObjectType } = require('graphql');


const Query = new GraphQLObjectType({
    name:'UserQuery',
    description:'用户信息查询',
    fields:() => (Object.assign({
    },))
})

const schema = new GraphQLSchema({
    query:Query
})

module.exports = schema;