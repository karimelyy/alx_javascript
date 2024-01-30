#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};

// Add the named incr function to myObject
myObject.incr = function incr() {
  this.value++;
};

console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);