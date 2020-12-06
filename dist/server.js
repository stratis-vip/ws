"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var schema_1 = __importDefault(require("./graphql/schema"));
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var http_1 = require("http");
var apollo_server_express_1 = require("apollo-server-express");
var app = express_1.default();
var apollo = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    playground: true
});
apollo.applyMiddleware({ app: app });
var ws = http_1.createServer(app);
apollo.installSubscriptionHandlers(ws);
ws.listen({ port: 4000 }, function () {
    console.log("GraphQL API URL: http://localhost:4000/graphql", apollo.graphqlPath);
    console.log("Subscriptions URL: ws://localhost:4000/graphql");
});
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: resolvers,
//   graphiql: true
// }))
// app.listen(4000)
// console.log('running at localhost:4000')
