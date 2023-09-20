'use strict';

const user = {
  firstName: 'Misha',
  age: '39',
  isMarried: true,
};

user.x = 10;

// for (const key in user) {
//   console.log(key, user[key]);
// }

// console.log(Object.keys(user));

// for (const key of Object.keys(user)) {
//   console.log(key, user[key]);
// }

// for (const value of Object.values(user)) {
//   console.log(value);
// }

for (const entry of Object.entries(user)) {
  console.log(entry[0], entry[1]);
}
