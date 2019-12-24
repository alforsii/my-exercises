//1.call() method
//Get arguments without passing it to a function
let argsToArr = function() {
  console.log(arguments); //result: Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
};
argsToArr(1, 2, 3);

//to convert arguments to an array we can use array method slice()
argsToArr = function() {
  console.log([].slice.call(arguments)); // result [1,2,3]
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
console.log(lion); //result: cat {legs: 4, isDomestic: false}
// ---------------------------------------------------------
//2.apply() method
//apply method unlike call method, it converts array into regular
//lets find min of numbers
console.log(Math.min(1, 2, 3)); //result: 1
//what if we want to find min of given array numbers
let numArray = [1, 2, 3];
//we can use spread operator
Math.min(...numArray);
console.log(Math.min(...numArray)); // 1
//or another way we can apply method
Math.min.apply(null, numArray);
console.log(Math.min.apply(null, numArray)); // 1
// ----------------------------------------------------
//3.bind() method
let button = function(content) {
  this.content = content;
};

button.prototype.click = function() {
  console.log(`${this.content} clicked`);
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
    console.log('parse called');
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
    console.log('parse called');
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
    console.log('parse called');
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
