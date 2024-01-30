class Rectangle {
  constructor(w, h) {
    // Check for positive integers or set default values
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty object for invalid inputs
      this.width = undefined;
      this.height = undefined;
    }
  }
}

module.exports = Rectangle;
