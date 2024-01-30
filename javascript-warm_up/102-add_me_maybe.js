// Exporting the function to make it visible from outside
exports.addMeMaybe = function(number, theFunction) {
  number++;
  theFunction(number);
};