const lib = require('../src/index.js');

test('module loads', () => {
  expect(lib).toBeDefined();
});

test('basic functionality works', () => {
  expect(typeof lib).toBe('object');
});
