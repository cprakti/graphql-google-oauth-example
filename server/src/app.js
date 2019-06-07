require('./mongoose');
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  context: ({ req, res }) => ({ req, res }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
