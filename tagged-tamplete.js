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
