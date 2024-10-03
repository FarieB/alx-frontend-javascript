export default class Airport {
  constructor(name, code) {
    this._name = name; // Store name in _name
    this._code = code; // Store code in _code
  }

  // Override toString method
  toString() {
    return `[object ${this._code}]`; // Return the formatted string
  }
}
