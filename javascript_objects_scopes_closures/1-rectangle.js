class Rectangle {
  constructor(w, h) {
    // Set width and height to positive values
    this.width = Math.max(1, w || 1);
    this.height = Math.max(1, h || 1);
  }
}

module.exports = Rectangle;