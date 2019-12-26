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
console.log('Output for: sumOfMatrix', sum);

//2. Make your own reduce method,
// so that works the same way as reduce()
//and also takes a second parameter.
// [1, 2, 3].myReduce((c, v) => c + v, 0); ????
