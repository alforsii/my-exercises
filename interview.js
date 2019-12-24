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

//2.How to reverse a string
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

//3.
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

//4.
// [1, 2].print(); //should print 1,2
// Array.prototype.print = function print() {
//   this.forEach(elem => console.log(elem));
// };
Array.prototype.print = function() {
  let result = '';
  this.forEach((elem, i) => {
    if (i === this.length - 1) result += elem;
    else result += `${elem},`;
  });
  console.log(result);
};
[1, 2].print(); // 1,2
// Array.prototype.print = function print() {
//   let result = '';
//   for (let [i, elem] of this) {
//     if (i === this.length) result += elem;
//     else result += `${elem},`;
//   }
//   console.log(result);
// };
