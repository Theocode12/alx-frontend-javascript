/* eslint-disable */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }
  set amount(amount) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    this._amount = amount;
  }

  get currency() { return this._currency; }
  set currency(currency) {
    if (typeof currency !== 'object') throw TypeError('currency');
    this._currency = currency;
  }

  displayFullPrice () {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number') throw TypeError('amount must be a number');
    if (typeof conversionRate === 'number') throw TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}
