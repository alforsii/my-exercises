//1.Find the problem
let profile = {
  name: 'techSith',
  getName: () => {
    //problem here arrow function with 'this' keyword
    console.log(this.name);
  },
};

// profile.getName();
//to fix that without using regular function =>
//Solution-1:
profile = {
  name: 'techSith',
  getName: () => {
    //problem here arrow function with 'this' keyword
    console.log(profile.name);
  },
};

profile.getName();
//Solution-2:
profile = {
  name: 'techSith',
  getName: () => {
    //problem here arrow function with 'this' keyword
    console.log(this.name);
  },
};

profile.getName();
//=======================================================
//2.Find the number of max in array?
let array = [1, 2, 2, 4, 2, 4, 4, 6];

//Solution:

let max = Math.max(...array),
  numOfMax = 0,
  len = array.length,
  i = 0;
while (i <= len) {
  if (array[i] === max) numOfMax++;
  i++;
}
// console.log('Output for: numOfMax', numOfMax);

//==========================================================
//3.What is the result?
function unknown() {
  const arr = [5, 120, 25, 21];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`Index: ${i}, elem: ${arr[i]}`);
    }, arr[i]);
  }
}
// unknown()
//Solution: it sorts the array: smallest will be print first: 5,21,25,,120

//==========================================================
//4.Convert time AM/PM to 24/7 ?
let time = '00:03AM';

//Solution:
function converter(t) {
  let times247 = t.split('AM')[0];
  if (t.includes('PM')) {
    times247 = t.split('PM')[0].split(':');
    // times247 = times247.split(':');
    if (parseInt(times247[0]) === 12) {
      times247[0] = 12;
    } else {
      times247[0] = parseInt(times247[0]) + 12;
    }
    times247 = times247.join(':');
    console.log(times247);
    return times247;
  }
  console.log(times247);
  return times247;
}
converter(time);

//==========================================================
//5.Method chaining
let x = {
  a() {
    console.log('a');
  },
  b() {
    console.log('b');
  },
};

// x.a()
//   .b()
//   .a()
//   .a();

//What we need to change to make method chaining above to work???

//Solution:
x = {
  a() {
    console.log('a');
    return this;
  },
  b() {
    console.log('b');
    return this;
  },
};

x.a()
  .b()
  .a()
  .a(); //result: a b a a

//6.==============================================
//convert to hex
let num = 148;
//Solution-1:
let toHex2 = num.toString(16);
console.log('Hex:', toHex2);

//Solution-2:
// let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F];
let hexObj = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
};
function toHex(dec) {
  let rem;
  if (dec <= 16) {
    if (dec > 10) {
      rem = hexObj[dec - 1];
      console.log(rem);
      return rem;
    } else {
      rem = dec;
      console.log(rem);
      return rem;
    }
  }

  rem = dec / 16; //

  if (dec % 16 === 0) {
    rem = rem.toString().split(' ');
    rem[1] = '0';
    if (rem[0] % 16 === 0) {
      rem[0] = (rem[0] / 16).toString().split(' ');
      rem[0][1] = '0';
      rem = [...rem[0], rem[1]];
    } else {
      rem[0] = rem[0] / 16;
      rem[0] = rem[0].toString().split('.');
      rem[0][0] = (rem[0][0] / 16).toString().split('.');
      rem[0][0][1] = ('0.' + rem[0][0][1]) * 16;
      rem[0][1] = ('0.' + rem[0][1]) * 16;
      rem = [...rem[0], rem[1]];
      rem = [...rem[0], rem[1], rem[2]];
      //   console.log('Output for: rem', rem);
    }
  } else {
    rem = rem.toString().split('.');
    rem[0] = (rem[0] / 16).toString().split('.');
    rem[1] = ('0.' + rem[1]) * 16;
    rem[0][1] = ('0.' + rem[0][1]) * 16;
    rem = [...rem[0], rem[1]];
  }
  //------check for hex-----
  for (let i = 0; i < rem.length; i++) {
    if (rem[i] >= 10) {
      rem[i] = hexObj[rem[i]];
    }
  }
  // ------------------------
  if (rem[0] == 0) rem.splice(0, 1);

  rem = rem.join('');

  console.log('Output for: rem', rem);
  return rem;
}

toHex(num); //2
toHex(256); //19F0
toHex(255); //FF
toHex(300); //12C
toHex(211); //D3
toHex(148); //94
// toHex(590); //24E
// toHex(56); //38
// toHex(27); //1B
// toHex(188); //BC
