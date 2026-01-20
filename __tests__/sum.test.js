const sum = require('../src/sum');

test('sum adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
