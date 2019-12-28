//Currying in JavaScript using closures
//1.
let add = function(a) {
  return function(b) {
    return a + b;
  };
};

let addToFive = add(5);

//2.
('use strict');
let sumArr = function(...n) {
  let tot = 0;
  for (let i = 0; i < n.length; i++) {
    tot += n[i];
  }
  return tot;
};

let spiceUp = function(fn, ...n) {
  return function(...m) {
    let concatArr = n.concat(m);
    return fn.apply(this, concatArr);
  };
};

let doSumOfArr = spiceUp(sumArr, 1, 2, 3);
console.log(doSumOfArr(2));
console.log(doSumOfArr(2, 3, 5));
// //or
// console.log(spiceUp(sumArr, 1, 2, 3)(2));
// console.log(spiceUp(sumArr, 1, 2, 3)(2, 3, 5));

//a. ...n
//converts to an array
let num = function(...n) {
  return n;
};
console.log('using ...n', num(1, 2, 3));

//b. .call
//converts to an array
let num1 = function() {
  return [].slice.call(arguments);
};
console.log('using call', num1(1, 2, 3));

//c. .apply
//converts to an array
let num2 = function() {
  return [].slice.apply(arguments);
};
console.log('using apply', num2(1, 2, 3));

//3.
let saySomething = function(a) {
  return function(b) {
    return function(c) {
      console.log(`${a} to ${b} using ${c}`);
    };
  };
};

//a.
saySomething('Hello')('friends')('JavaScript');

//b.
let sayHello = saySomething('Hi');
let sayHelloToMe = sayHello('me');
let sayHelloToMeUsing = sayHelloToMe('Java');
