//1.get sum
let ary = [1, 2, 5, 7];
const sum = ary.reduce((a, v) => a + v);
console.log('Output for: sum', sum);

//2.===============================================
// add(1,2); some function
// add(1)(2);some function
//wright a function that does both ways?

//Solution:---------
function add(a, b) {
  if (a && b) {
    console.log(a + b);
    return a + b;
  } else {
    return (add2 = function(c) {
      console.log(a + c);
      return a + c;
    });
  }
}

add(1)(2); //3
add(1, 2); //3

//3.=========================================================
// const arr = [1-100] //except 1 number is missing
// 99 numbers available, how to find one missing number???
//solution -1:
//if one number missing and if sorted in order 1 to heigh number
let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let missNumber = arr.filter((num, i) => {
  if (arr.indexOf(i + 1) == -1) {
    console.log('missing:', num - 1);
    return num - 1;
  }
});

//solution -2: ? not sure if this works. Need to fix
// let len = arr.length;
// let total = (len * (len + 1)) / 2;
// let arrTotal = arr.reduce((t, i) => t + i);
// console.log('missing:', total - arrTotal);

//4.=======================================================
//How to use min amount of coins to pay in cashier $20.47?
const til = {
  penny: 12,
  nickel: 10,
  dime: 2,
  quarter: 12,
  dollar: 30,
};

//so it should be $20 + 1quarter + 2dimes + 2 pennies
//Solution:---------------

const value = {
  penny: 1,
  nickel: 5,
  dime: 10,
  quarter: 25,
  dollar: 100, // $1=== 100pennies
};

let checkHowManyCoinsNeeded = {};
function countMoney(total) {
  let cents = total * 100; //2047
  let dollRe = cents % value.dollar; //47c
  let dollars = cents - dollRe || 0; //$20
  let qts = dollRe - (dollRe % value.quarter) || 0; //25c
  let qtsRe = dollRe % value.quarter; //22c
  let dms = qtsRe - (qtsRe % value.dime) || 0; //20c
  let dmsRe = qtsRe % value.dime; //2c
  let nks = dmsRe - (dmsRe % value.nickel) || 0; //2c
  let nksRe = dmsRe % value.nickel; //0c
  let pen = nksRe - (nksRe % value.penny) || 0; //0c
  checkHowManyCoinsNeeded.penny = pen;
  checkHowManyCoinsNeeded.nickel = nks / 5 || 0;
  checkHowManyCoinsNeeded.dime = dms / 10 || 0;
  checkHowManyCoinsNeeded.quarter = qts / 25 || 0;
  checkHowManyCoinsNeeded.dollar = dollars / 100 || 0;
  return checkHowManyCoinsNeeded;
}

console.log(countMoney(20.97)); //2penny,2dime,3quarter and $20
countMoney(20.47); //$20 + 1quarter + 2dimes + 2 pennies
//Now lets see if we have enough money in the register

for (let i in til) {
  let coinNeeded = {};
  if (til[i] < checkHowManyCoinsNeeded[i]) {
    coinNeeded[i] = checkHowManyCoinsNeeded[i] - til[i];
    console.log('Needed', coinNeeded);
  }
}
