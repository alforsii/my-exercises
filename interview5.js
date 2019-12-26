//1. Find sum of the matrix?
const matrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

//Solution-1:
const newArr = [];
for (let i = 0; i < matrix.length; i++) {
  newArr.push(...matrix[i]);
}
const sum = newArr.reduce((a, v) => a + v);
// console.log('Output for: sumOfMatrix', sum);

//==================================================
//2. Make your own reduce method,
// so that works the same way as reduce()
//and also takes a second parameter.
// [1, 2, 3].myReduce((c, v) => c + v, 0); ????

//Solution-1:
Array.prototype.myReduce = function(f, init) {
  let initialVal = init;
  let b = 0;
  if (typeof init === 'undefined') {
    b = 1;
    initialVal = this[0];
  }
  for (let i = b; i < this.length; i++) {
    // //1.
    initialVal += this[i];
    // //2.or ->
    // initialVal = f(this[i], initialVal);
  }
  return initialVal;
};
let arr = [1, 2, 3, 4, 5, 6, 7];
let sum2 = arr.myReduce((acc, val) => acc + val, 10);
// console.log('Output for: sum2', sum2);

//Solution-2:
Array.prototype.myReduce = function(f, init) {
  let initialVal = init || 0;
  for (let i = 0; i < this.length; i++) {
    // //1.
    // initialVal += this[i];
    // //2.or ->
    initialVal = f(this[i], initialVal);
  }
  return initialVal;
};

arr = [1, 2, 3, 4, 5, 6, 7];
sum2 = arr.myReduce((acc, val) => acc + val, 10);
// console.log('Output for: sum2', sum2);

////==================================================
//3.Can you make your own Promise() like MyPromise???
/*------------- Promise--------------------
let promise = new Promise(function(resolve,reject){
if(something){
    resolve(msg)
}else{
    reject(error)
}
});
*/

let MyPromise = function(resolve, reject) {
  let res = resolve;
  let rej = reject;

  res = function() {};
};

// let promise1 = new MyPromise();
// console.log(typeof promise1.res);

////==================================================
//4.Make a function that gives results in the below:
// f(1)(2)(3); //9
// f(2)(2)(1); // 4
// f(2, 2, 1); //4
// f(); //0

//Solution-1:
function f(a, b, c) {
  if (a && b && c) return (a + b) * c;
  else if (a && b) {
    return function(arg) {
      return arg * (a + b);
    };
  } else if (a) {
    return function(arg2) {
      return function(arg3) {
        return (a + arg2) * arg3;
      };
    };
  } else return 0;
}

f(1)(2)(3); //9
// console.log('Output for: f(1)(2)(3)', f(1)(2)(3));
f(2)(2)(1); // 4
// console.log('Output for: f(2)(2)(1)', f(2)(2)(1));
f(2, 2, 1); //4
// console.log('Output for: f(2, 2, 1)', f(2, 2, 1));
f(); //0
// console.log('Output for: f()', f());
