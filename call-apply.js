//1.call() method
//Get arguments without passing it to a function
let argsToArr = function() {
  //   console.log(arguments); //result: Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  return arguments;
};
argsToArr(1, 2, 3);

//to convert arguments to an array we can use array method slice()
argsToArr = function() {
  //   console.log([].slice.call(arguments)); // result [1,2,3]
  return [].slice.call(arguments);
};
argsToArr(1, 2, 3);

//Another example for call method
let animal = function(legs) {
  this.legs = legs;
};
let cat = function(legs, isDomestic) {
  animal.call(this, legs); //basically === to this.legs=legs; by using call() get argument from another object
  this.isDomestic = isDomestic;
};
let lion = new cat(4, false);
// console.log(lion); //result: cat {legs: 4, isDomestic: false}
// ---------------------------------------------------------
//2.apply() method
//apply method unlike call method, it converts array into regular
//lets find min of numbers
Math.min(1, 2, 3);
// console.log(Math.min(1, 2, 3)); //result: 1
//what if we want to find min of given array numbers
let numArray = [1, 2, 3];
//we can use spread operator
Math.min(...numArray);
// console.log(Math.min(...numArray)); // 1
//or another way we can apply method
Math.min.apply(null, numArray);
// console.log(Math.min.apply(null, numArray)); // 1
// ----------------------------------------------------
//3.bind() method
let button = function(content) {
  this.content = content;
};

button.prototype.click = function() {
  //   console.log(`${this.content} clicked`);
  return `${this.content} clicked`;
};
let newButton = new button('add');
newButton.click(); //add clicked
let looseClick = newButton.click;
// looseClick = newButton.click();//Uncaught TypeError: looseClick is not a function
looseClick(); // undefined clicked
//so in this situation we can use bind()
let boundClick = newButton.click.bind(newButton);
boundClick(); // add clicked
// ===================================================
//another example for bind()
let myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log('parse called');
  },
  render() {
    this.asyncGet(function() {
      this.parse();
      //Uncaught TypeError: this.parse is not defined
      //because 'this' in this function block scope it has it's own local 'this'
      //and cannot find parse() within this function()
    });
  },
};
// myObj.render();
//a)one solution: using arrow function instead function(),which makes 'this' global
myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    // console.log('parse called');
    return 'parse called';
  },
  render() {
    this.asyncGet(() => {
      //solution arrow =>
      this.parse();
    });
  },
};

// myObj.render();
// b).Switch 'this' keyword with 'that'
myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    // console.log('parse called');
    return 'parse called';
  },
  render() {
    let that = this; //solution
    this.asyncGet(function() {
      that.parse();
    });
  },
};

// myObj.render();

// c)Using bind() - bind outer objects 'this' with local 'this':
myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    // console.log('parse called');
    return 'parse called';
  },
  render() {
    this.asyncGet(
      function() {
        this.parse();
      }.bind(this)
    );
  },
};

myObj.render();

//conclusion: You can have 2 or more object and each object can have it's own properties and methods.
//And you can access from one object to another objects properties by using call,apply or bind
//===================================================================================================
let obj1 = { num: 2 };
let obj2 = {
  add: function(a) {
    return this.num + a;
  },
};
//obj1 does not have any method,but obj 2 has a method but doesn't have any properties.
//we can combine this 2 with call,apply or bind
//whichever method going to execute goes first
let result = obj2.add.call(obj1, 2); // 2 === a
// console.log(result); // result: 4
//so in obj2.add by using call() this.num will be looking for num in obj1 and this keyword will be referred to obj1 in this case.
//call takes 2 arguments: one is where to look another current argument
// obj2.method.call(obj1,obj2(arg))

//if we have obj2 method more that one argument
obj2 = {
  add: function(a, b, c) {
    return this.num + a + b + c;
  },
};
//then
// obj2.add.call(obj1, a, b, c);
//first argument in call have to be the object where we reference this keyword
obj2.add.call(obj1, 1, 2, 3);
// console.log(obj2.add.call(obj1, 1, 2, 3)); // 8

//what if we want to pass argument as an array. For example,
let arr = [1, 2, 3];
//then instead call we use apply
obj2.add.apply(obj1, arr);
// console.log(obj2.add.apply(obj1, arr)); // 8

//or
obj2.add.call(obj1, ...arr);
// console.log(obj2.add.call(obj1, ...arr));// 8

//how to use bind() method for this case
obj2.add.bind(obj1, arr);
// console.log(obj2.add.bind(obj1, arr));
//it gives us :
//ƒ (a, b, c) {
//     return this.num + a + b + c;
//   }

console.dir(obj2.add.bind(obj1, arr));
//result:
// ƒ bound add()
// arguments: (...)
// caller: (...)
// length: 2
// name: "bound add"
// __proto__: ƒ ()
// [[TargetFunction]]: ƒ (a, b, c)
// [[BoundThis]]: Object
// num: 2
// __proto__: Object
// [[BoundArgs]]: Array(1)
// 0: (3) [1, 2, 3]
// length: 1
// __proto__: Array(0)

//obj1 attached to obj2 with bind() method
let bound = obj2.add.bind(obj1); //basically whatever 'this' keyword in obj2 look for it's value in obj1
// console.log(bound); //gives us obj2 method
//simply we can pass arg
bound(1, 2, 3);
// console.log(bound(1, 2, 3)); // 8
//or passing array
bound(...arr);
// console.log(bound(...arr)); // 8
