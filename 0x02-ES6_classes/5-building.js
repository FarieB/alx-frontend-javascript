/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // Use the setter to verify the type
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  // Method to be overridden
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
