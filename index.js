'use strict';

const { formatMoney } = require('accounting');

class Money {
  constructor(value, ...options) {
    this.value = value;
    this.options = options;
  }

  toString() {
    return formatMoney(this.value, ...this.options);
  }

  valueOf() {
    return this.value;
  }
}

module.exports = (howMuch, ...options) => new Money(howMuch, ...options);
module.exports.Money = Money;
