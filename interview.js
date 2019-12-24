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
