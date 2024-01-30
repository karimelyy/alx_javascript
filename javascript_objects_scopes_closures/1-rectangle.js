class Rectangle {
  constructor(w, h) {
    // Check for valid input and provide default values if necessary
    this.width = (w > 0) ? w : 1;
    this.height = (h > 0) ? h : 1;
  }
}

module.exports = Rectangle;