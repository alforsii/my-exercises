//5.Get arguments without passing it to a function
let argsToArr = function() {
  console.log(arguments);
};
argsToArr(1, 2, 3); //result: Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//to convert we can use array method
argsToArr = function() {
  console.log([].slice.call(arguments)); // result [1,2,3]
  return [].slice.call(arguments);
};
argsToArr(1, 2, 3);
