const { makeExecutableSchema } = require('graphql-tools');
const templateDirective = require('../index');

// Define your schema and resolvers if needed

const typeDefs = `
  type Query {
    me(): Me @templateDirective
  }
`;

const resolvers = {
  Query: {
    me: () => false,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    templateDirective,
  },
});
