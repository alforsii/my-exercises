//1.Public chaining method
let obj = function() {
  this.i = 0;

  this.add = function(i) {
    this.i += i;
    return this;
  };
  this.subtract = function(i) {
    this.i -= i;
    return this;
  };
  this.print = function() {
    console.log(this.i);
  };
};

let ob = new obj();

ob.add(3)
  .subtract(2)
  .print();

//2.How to make closure the same function above ?
//to make closure -we need to make all properties privet, so it's not available outside
let obj1 = function() {
  let i = 0;

  let add = function(j) {
    i += j;
    return this;
  };
  let subtract = function(j) {
    i -= j;
    return this;
  };
  let print = function() {
    console.log(i);
  };
  return { add: add, subtract: subtract, print: print };
};

let ob1 = obj1();

ob1
  .add(3)
  .subtract(2)
  .print();
