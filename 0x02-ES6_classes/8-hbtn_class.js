export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location; // Store location in _location
  }

  // Convert to Number
  valueOf() {
    return this._size; // Return the size when cast to a Number
  }

  // Convert to String
  toString() {
    return this._location; // Return the location when cast to a String
  }
}
