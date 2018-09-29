const { SchemaDirectiveVisitor } = require('graphql-tools');

class TemplateDirective extends SchemaDirectiveVisitor {
  //
  // Check this article for implementation details:
  // https://dev-blog.apollodata.com/reusable-graphql-schema-directives-131fb3a177d1
  //
  // also check out the SchemaDirective docs from graphql-tools
  // https://www.apollographql.com/docs/graphql-tools/schema-directives.html
  //
}

module.exports = TemplateDirective;
