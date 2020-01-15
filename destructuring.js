const obj = {
  name: 'John',
  lastName: 'Doe',
  address: {
    house: 123,
    street: 'Main St',
    city: 'Miami',
  },
  books: [{ book1: 'Ocean' }, 'Math', 'English'],
};

const {
  name,
  lastName,
  address: { house, street, city },
  books: [{ book1 }, book2, book3],
} = obj;
console.log(name);
console.log(lastName);
console.log(house);
console.log(street);
console.log(city);
console.log(book1);
console.log(book2);
