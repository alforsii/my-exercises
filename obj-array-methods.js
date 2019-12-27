//1.
let profile = { name: 'John', age: 33 };
//how to make this object properties const???
Object.freeze(profile);
//now you can't modify profile object.
profile.title = 'Boss'; //does not add new property
profile.age = 55; //and can not modify
console.log('Output for: profile', profile);

//2.Now how to make properties able to modify but not to add new properties?
let profile2 = { name: 'Jane', age: 23 };
Object.seal(profile2);
profile2.age = 33; //it does modify property
profile2.title = 'Engineer'; //but we can't add new property
console.log('Output for: profile2', profile2);

//3. How we can make some property able to modify and some not??
//let's say we want name to be const
let profile3 = { age: 33 };
Object.defineProperty(profile3, 'name', {
  value: 'Ashraf',
  writable: false,
}); //this on dev tool console will show result but with my node in terminal not working

profile3.name = 'ash'; //does not modify
profile3.age = 23; //modified
profile3.title = 'student'; //adds new property
console.log('Output for: profile3', profile3);

//Let's see if can modify certain property and not to add new property
//we seal object
Object.seal(profile3);
profile3.address = '1025'; //now we cannot add property

//4 how to remove duplicate from an array?
let num = [1, 2, 3, 3, 4, 5, 12, 2, 23, 12, 3, 2];
//one
let newArr = [];
for (let i = 0; i < num.length; i++) {
  if (newArr.indexOf(num[i]) == -1) {
    newArr.push(num[i]);
  }
}
console.log('Output for: newArr', newArr);

//how to do the same without for loop or forEach
//there new method Set()
let sort = new Set(num); //it returns as an object
console.log('Output for: sort', sort);
//to convert object to an array
sort = [...sort];
console.log('Output for: sort', sort);
//convert to Object
sort = { ...sort };
console.log('Output for: sort', sort);
//2 convert to array does not work, because spread operator is an array method
//and does not work with objects.
// sort = [...sort];//wrong
//instead we can use Object method Object.values(object) to get the values;
//convert from object to an array
sort = Object.values(sort); //correct
console.log('Output for: sort', sort);
