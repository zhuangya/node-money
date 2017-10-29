'use strict';

const Big = require('big.js');
const { formatMoney } = require('accounting');

class Money extends Big {
  constructor(value, ...options) {
    super(value);
    this.value = value;
    this.options = options;
  }

  toString() {
    return formatMoney(this.value, ...this.options);
  }

  valueOf() {
    return this;
  }
}

module.exports = (howMuch, ...options) => new Money(howMuch, ...options);
module.exports.Money = Money;
