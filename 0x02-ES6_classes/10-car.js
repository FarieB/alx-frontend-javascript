const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Clone method
  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Method to call the clone method
  cloneCar() {
    return this[cloneSymbol](); // Invoke the symbol method
  }
}
