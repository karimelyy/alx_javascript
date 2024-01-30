#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Set default values for invalid inputs
      this.width = undefined;
      this.height = undefined;
    }
  }
}

module.exports = Rectangle;