//1.
let fn = function(...n) {
  console.log(n);
};
fn(1, 2, 3);
//2.
fn = function() {
  console.log('without ...', arguments);
  console.log('with ...', [...arguments]);
};
fn(1, 2, 3);

//3.combine arrays
let a = [1, 2, 3];
let b = [4, 5, 6, 7];

// a.push(...b); //mutates array a

let newArr1 = [];
newArr1.push(...a, ...b); //concat
console.log('newArr1:', newArr1);

let newArr2 = [].push(...a, ...b); //does not concat
console.log('newArr2:', newArr2);

let newArr3 = [...a, ...b]; //concat
console.log('[...a,...b]:', newArr3);

let newA = a.concat(b); //concat
console.log('concat newA', newA);

console.log('a.length:', a.length);
// newArr2 === a.push(...b)
console.log('What is this a.push(...b) =', a.push(...b), '[]', newArr2);
