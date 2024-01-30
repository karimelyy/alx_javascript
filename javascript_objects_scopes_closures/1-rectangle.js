class Rectangle {
  constructor(w, h) {
    if (w !== undefined && h !== undefined) {
      // Set width and height to positive values
      this.width = Math.max(1, w);
      this.height = Math.max(1, h);
    } else if (w !== undefined) {
      // Only width provided
      this.width = Math.max(1, w);
      this.height = 1;
    } else if (h !== undefined) {
      // Only height provided
      this.width = 1;
      this.height = Math.max(1, h);
    } else {
      // No arguments provided
      this.width = 1;
      this.height = 1;
    }
  }
}

module.exports = Rectangle;