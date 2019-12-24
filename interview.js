//1. Make array from object values only
let x = {
  a: 1,
  b: 2,
};

//a.
const xArr = [];
for (let i in x) {
  //   xArr.push(i); //this is wrong returns ['a','b']
  xArr.push(x[i]); //returns [1,2] - correct
}
console.log('Output for: xArr', xArr);

//2.====================================================
//How to reverse a string
let y = 'hi';
y = y
  .split('')
  .reverse()
  .join('');
console.log(y);
y = 'hi John';
y = y
  .split('')
  .reverse()
  .join('');
console.log(y);

//3.==============================================
let obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
  },
  getB() {
    console.log(this.b);
  },
};

// What modification can we do in our object to get result for:
// obj.getA().getB(); //Uncaught TypeError: Cannot read property 'getB' of undefined
//???????

//answer:
//return obj; we need to add this part to return obj,so when obj.getA() called
//we get the result and return obj so for obj.getA()===obj
//so next call will be obj.getB()
obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this; //or
    return obj; //or
  },
  getB() {
    console.log(this.b);
  },
};

// What modification can we do in our object to get result for:
obj.getA().getB(); //prints 1 and 2

//4.======================================
// [1, 2].print(); //should print 1,2

// Array.prototype.print = function print() {
//   this.forEach(elem => console.log(elem)); //prints 1 2
// };

//it should be ',' between 1 and 2
Array.prototype.print = function() {
  let result = '';
  this.forEach((elem, i) => {
    if (i === this.length - 1) result += elem;
    else result += `${elem},`;
  });
  console.log(result);
};
[1, 2].print(); // 1,2
//another way =>
//we cannot use arrow function because of 'this' keyword
//maybe some other solution without this keyword
Array.prototype.print = function print() {
  let result = '';
  for (let i of this) {
    if (i === this.length) result += i;
    else result += `${i},`;
  }
  console.log(result);
};
[1, 2].print(); // 1,2
//5.===================================
//
const a = function(x) {
  this.x = x;
};
const b = function(x, y) {
  this.y = y;
  //   this.x = new a(x).x; //1.one solution
  a.call(this, x); //2.another solution ===this.x=x
};

// //1.one way
b.prototype = {
  getX() {
    console.log(this.x);
    return this.x;
  },
};
//2.another way
// b.prototype.getX = function(x) {
//   console.log(this.x);
//   return this.x;
// };

//2.another way
b.prototype.getY = function() {
  console.log(this.y);
  return this.y;
};

const newB = new b('x', 'y');

newB.getX(); //x
newB.getY(); //y

//6.=====================================
//How to deep clone, so when you change copy's property original will not mutate?
const obj2 = {
  a: {
    b: {
      c: 1,
    },
  },
};
// const clone =

// clone.a.b.c = 2; // ?????????????
// console.log(obj.a.b.c);

const clone = JSON.parse(JSON.stringify(obj2));
clone.a.b.c = clone.a.b.c + 1;
console.log('Output for: obj2', obj2.a.b.c); //original not modified
console.log('Output for: clone', clone.a.b.c); //2

//7.=====================================================
//concat and sort()
const a1 = [1, 2, 5, 7, 9];
const b1 = [2, 5, 7, 12, 100];
//result should be const c= [1,2,2,5,5,7,7,12,100];

const c = [...a1, ...b1];
// const c = a1.concat(b1); //another way
c.sort((a, b) => {
  return a - b;
});
console.log('Output for: c', c);

//8.==================================================

let obj3 = {
  x: 1,
  getXX() {
    const inner = function() {
      console.log(this.x);
    };
    inner();
  },
};
obj3.getXX(); //undefined should be 1

//solution-1:
obj3 = {
  x: 1,
  getXX() {
    const inner = () => {
      //<<==here
      console.log(this.x);
    };
    inner();
  },
};
obj3.getXX();
//solution-2:
obj3 = {
  x: 1,
  getXX() {
    const inner = function() {
      console.log(this.x);
    }.bind(this); //<<<===here
    inner();
  },
};
obj3.getXX();
//solution-3:
obj3 = {
  x: 1,
  getXX() {
    const that = this; //<<<===here
    const inner = function() {
      console.log(that.x);
    };
    inner();
  },
};
obj3.getXX();
//solution-4:
obj3 = {
  x: 1,
  getXX() {
    const inner = function() {
      console.log(obj3.x);
    };
    inner();
  },
};
obj3.getXX();
