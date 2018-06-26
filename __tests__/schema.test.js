const { graphql } = require('graphql');
const directive = require('../index');
const schema = require('../example/schema');

test('getDirectiveDeclaration should be defined', () => {
  expect(directive.getDirectiveDeclaration()).toMatchSnapshot();
});

test('path is return correct result and fillParametersFromArgs replace parameters in url', () =>
  graphql(
    schema,
    `
      query {
        me
      }
    `
  ).then(response => {
    expect(response).toMatchSnapshot();
  }));
