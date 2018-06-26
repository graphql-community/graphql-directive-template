const { SchemaDirectiveVisitor } = require('graphql-tools');

class TempateDirective extends SchemaDirectiveVisitor {
  //
  // Check this article for implementation details:
  // https://dev-blog.apollodata.com/reusable-graphql-schema-directives-131fb3a177d1
  //
  // also exck out SchemaDirective docs from graphql-tools
  // https://www.apollographql.com/docs/graphql-tools/schema-directives.html
  //
}

module.exports = templateDirective;
