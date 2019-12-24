//1.simple example for closure
let passed = 3;
function add() {
  let inner = 2;
  return passed + inner;
}
console.dir(add);
//on https://jsfiddle.net/
//ƒ add()
// length: 0
// name: "add"
// arguments: null
// caller: null
// prototype: {constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: (index):33
// [[Scopes]]: Scopes[2]
// 0: Closure (window.onload) => passed: 3
// 1: Global

//2.Another similar example
function add2(outer) {
  function add3(inner) {
    return outer + inner;
  }
  return add3;
}
add2(5);
console.dir(add2(5)); // ƒ add3(inner) which has property Scopes[2] => 0: Closure (add2) {outer: 5}, 1: Global
//it preserves outer value in closure
//if we pass inner - add2(outer)(inner)
console.log(add2(5)(3)); // result: 8
//or we can first assign to a new variable and then pass inner argument
let outerFunction = add2(5);
// outerFunction(inner)
outerFunction(3);
console.log(outerFunction(3)); //result: 8
