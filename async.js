//src: TechSith youTube
//1.
console.log('person1 shows ticket');
console.log('person2 shows ticket');

let preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise(
    (resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    }
  );
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "I don't like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  console.log(`Husband:Anything else darling`);
  console.log(`Wife: lets go we are going to miss the preview`);
  console.log(`Husband: thanks for the reminder *grin*`);

  return ticket;
};

preMovie().then(t => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

//2.promise all

console.log('person1 shows ticket');
console.log('person2 shows ticket');

preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise(
    (resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    }
  );
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  let [popcorn, candy, coke] = await Promise.all([
    getPopcorn,
    getCandy,
    getCoke,
  ]);

  console.log(`got ${popcorn}, ${candy}, ${coke}`);

  return ticket;
};

preMovie().then(t => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

//if reject try... catch

preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise(
    (resolve, reject) => {
      setTimeout(() => reject('ticket'), 3000);
    }
  );

  let ticket;
  try {
    ticket = await person3PromiseToShowTicketWhenWifeArrives;
  } catch (e) {
    //if rejected catch and display custom message
    ticket = 'sad face';
  }

  return ticket;
};

preMovie().then(t => console.log(`person4 shows ${t}`));
