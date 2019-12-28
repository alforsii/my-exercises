// IIFE - Immediately Invoked Function Expression

//1.
// //function
// function add(i) {
//   return i + 1;
// }

// //function expression
// let add1 = function(i) {
//   return i + 1;
// };
// add1(i)
//function invocation

//2.iife
// DO NOT uncomment examples above if you are using prettier extension,
// it will modify and cause problem with iife
//a.
(function(i) {
  console.log(i + 1);
  return i + 1;
})(2);
//b.
(function(i) {
  console.log(i + 1);
  return i + 1;
})(2);
//c.
//prettier modifying,
// this method should not have prentices after '!'.
//instead of '!' can be used '-' or '+' too.
!(function(i) {
  console.log(i + 1);
  //   return i + 1;
})(2);

//using JQuery
// (function($) {
//   $(this).addClass('MyClass');
// })(window.JQuery);
