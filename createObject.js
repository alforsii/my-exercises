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

//5.let check for constructor
const Mammal = function(legs) {
  this.legs = legs;
};
Mammal.prototype = {
  walk() {
    return 'walking';
  },
  sleep() {
    return 'sleeping';
  },
};
const Bat = function(legs, isVegetarian) {
  //to inherit from Mammal properties
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};

console.dir(Bat.prototype); //before 'Bat.prototype = Object.create(Mammal.prototype)' Bat has constructor
Bat.prototype = Object.create(Mammal.prototype);
//after 'Bat.prototype = Object.create(Mammal.prototype)' Bat constructor is wiped out
console.dir(Bat.prototype);
//so we need to set back constructor
Bat.prototype.constructor = Bat;
console.dir(Bat.prototype);

//now let add Bat's own method to see the difference
Bat.prototype.fly = function() {
  return 'flying';
};
console.dir(Mammal); //has walk() and sleep() methods
console.dir(Bat); //it inherits those 2 methods from Mammal and also now has it's own fly() method,see console.
//lets instantiate Bat
let babyBat = new Bat(4, true); //inherits everything from parent classes
console.dir(babyBat.sleep());
console.dir(babyBat.fly());
