// Exporting the function to make it visible from outside
exports.callMeMoby = function(x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
};