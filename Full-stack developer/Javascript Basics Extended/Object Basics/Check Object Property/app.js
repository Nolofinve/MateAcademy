'use strict';

const user = {
  firstName: 'Misha',
  age: '39',
  isMarried: undefined,
};

const key = 'toString';

// if (user[key] !== undefined) {
//   console.log('Property exists');
// }

// if (user.firstName) {
//   console.log('Property exists');
// }

// if (key in user) {
//   console.log('Property exists');
// }

if (Object.hasOwn(user, 'age')) {
  console.log('Property exists');
}

// if (user.hasOwnProperty(key)) {
//   console.log('Property exists');
// }
