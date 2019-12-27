// let readonly = function(target, key, descriptor) {
//   descriptor.writable = false;
//   return descriptor;
// };

class Car {
  constructor(color) {
    this.color = color;
  }

  //   @readonly //works with Babel transformer
  getColor() {
    return this.color;
  }
}

let descriptor = {
  value: function() {
    return this.color;
  },
  writable: false,
  configurable: true,
  enumerable: true,
};

//this make getColor() const,cannot be overwrite
Object.defineProperty(Car.prototype, 'getColor', descriptor);
const redCar = new Car('red');

redCar.getColor = function() {
  return 'blah';
};

console.log(redCar.getColor());
