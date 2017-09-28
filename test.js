'use strict';

const m = require('./');

test('valueOf as numebr', () => {
  expect(m(42) + 1).toBe(43);
  expect(m(1) + m(1) + m(1)).toBe(3);
});

test('toString as accounting.js formatted result', () => {
  expect(`price: ${m(42)}`).toBe('price: $42.00');
});

test('should pass options to accounting.js', () => {
  expect(`money in CNY: ${m(42, { symbol: '￥' })}`).toBe('money in CNY: ￥42.00')
  expect(`money in EUR: ${m(4999.99, "€", 2, ".", ",")}`).toBe('money in EUR: €4.999,99')
});
