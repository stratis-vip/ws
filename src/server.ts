// @ts-ignore
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import {createServer} from 'http'
import {ApolloServer} from 'apollo-server-express'


const app = express()

const apollo = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  playground: true
});

apollo.applyMiddleware({ app: app });
const ws = createServer(app);
apollo.installSubscriptionHandlers(ws);

ws.listen({ port: 4000 }, () =>{
  console.log(`GraphQL API URL: http://localhost:4000/graphql`, apollo.graphqlPath)
  console.log(`Subscriptions URL: ws://localhost:4000/graphql`)
});

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: resolvers,
//   graphiql: true
// }))

// app.listen(4000)
// console.log('running at localhost:4000')