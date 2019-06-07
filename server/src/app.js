require('./mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
