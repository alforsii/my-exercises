//1.
//Object.create(prototypeObject,propertyObject)
const myObject = Object.create(Object.prototype);
console.log('myObject.prototype from Master Object');
console.dir(myObject); //inherits from Master Object
console.log('Master Object.prototype');
console.dir(Object.prototype);
console.log('Master Object');
console.dir(Object);
//2.
const objectLiteral = {};
//the same as Object.create(Object.prototype)
console.log('objectLiteral');
console.dir(objectLiteral); //inherits
//3.
const objectWithNoProperties = Object.create(null);
console.log('objectWithNoProperties');
console.dir(objectWithNoProperties); //no properties

//4.prototype inheritance
const Car = function() {
  this.color = 'red';
};
Car.prototype = {
  getColor() {
    return this.color;
  },
};
const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);
const legoCar = new ToyCar();
console.dir(legoCar); //it has Car method
//to check if it's inheritance of Car
console.dir(legoCar instanceof ToyCar); //true
console.dir(legoCar instanceof Car); //true
console.dir(legoCar instanceof Object); //true
//another way of checking also
console.dir(ToyCar.prototype.isPrototypeOf(legoCar)); //true
console.dir(Car.prototype.isPrototypeOf(legoCar)); //true
console.dir(Object.prototype.isPrototypeOf(legoCar)); //true
