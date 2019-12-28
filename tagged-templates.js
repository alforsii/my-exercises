let a = 1,
  b = 2;
let sum = `${a} plus ${b} equals ${a + b}`;
console.log('Output for: sum', sum);

//lets see how we can use it with functions

let tagged = function(strArr, ...vals) {
  console.log('vals:', vals);
  console.log('strArr:', strArr);
  console.log('...strArr:', ...strArr);
  console.log('[...strArr]:', [...strArr]);
  console.log(`' [...strArr].join('').trim()'=`, [...strArr].join('').trim());

  //we can do next ==>>
  console.log(`${vals[0]} ${strArr[1]} ${vals[1]} ${strArr[2]} ${vals[2]}`);
};

tagged`${a} plus ${b} equals ${a + b}`;
//results:
// Output for: sum 1 plus 2 equals 3
// tagged-templates.js:9 vals: (3) [1, 2, 3]
// tagged-templates.js:10 strArr: (4) ["", " plus ", " equals ", "", raw: Array(4)]
// tagged-templates.js:11 ...strArr:   plus   equals
// tagged-templates.js:12 [...strArr]: (4) ["", " plus ", " equals ", ""]
// tagged-templates.js:13 ' [...strArr].join('').trim()'= plus  equals
// tagged-templates.js:16 1  plus  2  equals  3
