//1.If we remove any number from an array find max and min of the sum of array
const arr = [1, 2, 3, 4];

function findMaxMin(array) {
  let sum = array.reduce((a, v) => a + v);
  let minSum = sum - Math.max(...array); //sum-max===minSum
  let maxSum = sum - Math.min(...array); //sum-min===maxSum
  //another way of converting array
  //minSum = sum - Math.max.apply(null, array);
  //maxSum = sum - Math.min.apply(null, array);
  return { sumIfMaxRemoved: minSum, sumIfMinRemove: maxSum };
}
console.log(findMaxMin(arr));

//2.How to find length of a given integer number without converting it into a string?
let x = 12333; //len should be 5
let i = 1;
let length = 1;
let divide = 10;
while (i <= x) {
  if (i % divide === 0) {
    length++;
    divide = Number(divide + '0');
  }
  i++;
}
console.log('Output for: length', length);
