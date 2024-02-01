#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      console.log("Incorrect arguments. Creating an empty object.");
      return {};
    }

    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;