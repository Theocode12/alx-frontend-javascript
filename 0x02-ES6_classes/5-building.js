/* eslint-disable */

export default class Building {
  constructor(sqft) {

    if ((new.target != Building) && (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage)) {
      throw new Error('Class extending Building must override evacuationWarningMessage')
    }
    this.sqft = sqft;
  }

  get sqft() { return this._sqft; }

  set sqft(sqft) {
    if (typeof sqft !== 'number') { throw TypeError('sqft must be a number'); }
    this._sqft = sqft;
  }

  evacuationWarningMessage () {
    throw new Error('Class extending Building must override evacuationWarningMessage')
  }
}
