//1.
let profile = { name: 'Jone', age: 33 };
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
