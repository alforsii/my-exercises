//1.
let toyota = {
  drive() {
    return 'driving toyota';
  },
};
let camry = {
  wiFi() {
    return 'using wiFi';
  },
};

console.dir(camry);
Object.setPrototypeOf(camry, toyota); //set property of camry to toyota
console.dir(camry.drive());

//using super keyword
toyota = {
  drive() {
    return 'driving toyota';
  },
};
camry = {
  drive() {
    return `${super.drive()} camry`;
  },
};

Object.setPrototypeOf(camry, toyota); //set property of camry to toyota

console.dir(camry.drive());
