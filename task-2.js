/* const friend = ['Mango', 'Kiwi', 'Random friend', 'Banana'];
console.table(friend);
 */
/* 
const friends = ['Mango', 'Kiwi', 'Random friend', 'Banana'];

for (let iterator of friends) {
  let asd = iterator;
  console.log(asd);
}
console.log(friends);
 */

/* const cart = [54, 1123, 33, 4, 44, 56, 771, 123];
let total = 0;
for (let i = 0; i < cart.length; i += 1) {
  total += cart[i];
}
console.log(total); */

/* const cart = [54, 1123, 33, 4, 44, 56, 771, 123];
let total = 0;
for (const i of cart) {
  total += i;
}
console.log(total);
 */
/* 
const logins = ['Anton', 'Diana', 'Arnold', 'Sebastian', 'Lora'];
const loginToFind = 'Arnold';
let message;

for (let i = 0; i < logins.length; i += 1) {
  const real = logins[i];
  if (loginToFind === real) {
    message = `Пользователь ${loginToFind} найден`;
    break;
  }
  message = `Пользователь ${loginToFind} не найден`;
}
console.log(message);
 */

/* const logins = ['Anton', 'Diana', 'Arnold', 'Sebastian', 'Lora'];
const loginToFind = 'Arnold';

const message = logins.includes(loginToFind) ? 'ага' : 'no';
console.log(message); */

/* const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const copyOfHouses = houses.slice();

console.log(houses);
console.log(...houses);
 */

/* не работает */

/* const fnA = function () {
  const arra = fnB();
  console.log(arra);
};
const fnB = function () {
  console.log(2);

  const arra = fnC();
  return arra;
};

const fnC = function () {
  console.log(3);
  const arra = 15;
  return arra;
};
console.log(fnA()); */

/* function fnA() {
  const arra = fnB();
  console.log(arra);
}
function fnB() {
  console.log(2);

  const arra = fnC();
  return arra;
}

function fnC() {
  console.log(3);
  const arra = 15;
  return arra;
}
console.log(fnA()); */

/* const cart = [54, 1123, 33, 4, 44, 56, 771, 123];

const calculateTotalPrice = function (params) {
  let total = 0;
  for (const param of params) {
    total += param;
  }

  return total;
};

console.log(calculateTotalPrice([1, 2, 3, 56])); */

/* function calculateTotalPrice(params) {
  let total = 0;
  for (const param of params) {
    total += param;
  }

  return total;
}
console.log(calculateTotalPrice([1, 2, 3, 56])); */
/* const logins = ['Anton', 'Diana', 'Arnold', 'Sebastian', 'Lora'];

function foundLogin(alllogins, loginToFind) {
  let message = `Пользователь ${loginToFind} не найден`;
  for (const login of alllogins) {
    if (login === loginToFind) {
      message = `Пользователь ${loginToFind} найден`;
    }
  }
  return message;
}

console.log(foundLogin(logins, 'Anton'));
console.log(foundLogin(logins, 'Sebastian'));
console.log(foundLogin(logins, 'Alina')); */

/* const logins = ['Anton', 'Diana', 'Arnold', 'Sebastian', 'Lora'];

function foundLogin(alllogins, loginToFind) {
  for (const login of alllogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind} найден`;
    }
  }
  return `Пользователь ${loginToFind} не найден`;
}

console.log(foundLogin(logins, 'Anton'));
console.log(foundLogin(logins, 'Sebastian'));
console.log(foundLogin(logins, 'Alina')); */

/* const numbers = [54, 1123, 33, 4, 44, 56, 771, 123];
let smallnumber = numbers[0];
for (const number of numbers) {
  if (number < smallnumber) {
    smallnumber = number;
  }
}

console.log(smallnumber); */

/* function smallNumer(numbers) {
  let smallnumber = numbers[0];
  for (const number of numbers) {
    if (number < smallnumber) {
      smallnumber = number;
    }
  }
  return smallnumber;
}
console.log(smallNumer([54, 1123, 33, 4, 44, 56, 771, 123]));
 */
/* 
const string = 'AasdDSAasd';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  const isEqual = letter === letter.toLowerCase();

  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(invertedString); */

/* function changeCase(string) {
  const letters = string.split('');
  let invertedString = '';
  for (const letter of letters) {
    const isEqual = letter === letter.toLowerCase();

    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
  }
  return invertedString;
}
console.log(changeCase('AasdDSAasd')); */

/* const title = 'Top 10 benefits of React framework';

const normalizeTitle = title.toLowerCase();

const words = normalizeTitle.split(' ');
const slug = words.join('-');
const slug1 = title.toLowerCase().split(' ').join('-');

 */

/* function slugify(string) {
  return string.toLowerCase().split(' ').join('-');
}

console.log(slugify('Top 10 benefits of React framework')); */

/* function filterNumbers(array, ...args) {
  const all = [];
  for (const element of array) {
    if (args.includes(element)) {
      all.push(element);
    }
  }
  return all;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); */
