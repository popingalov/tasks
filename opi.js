/* const a = ['a', 'b', 'c'];
const b = [1, [2, 3]];
const c = 0; */
/* const bb = b.pop().concat(b.shift()); */
/* const bbb = b.shift(); */
/* const bb = [b[0]].concat(b[1]);

const asd = [[1, 2, 3, 4]];
console.log(...[...asd]);

const a = ['a', 'b', 'c'];
const b = [1, [2, 3]];

let c = [...b[(1, 1)].concat(b[0])];
let c = [...b[(1, 1)].reverse().concat(b[0])].reverse();
console.log(c);

let g = [b[0], ...b[1]];
console.log(g);

const result = a.concat(c, bb);
console.log(result); */

/* function filterNumbers(array, ...args) {
  normalizeArgs = [args];
  console.log(normalizeArgs);

  const all = array.concat(args);

  return all;
}




 
/* Result: ['a', 'b', 'c', 0, 1, 2, 3]; */

/* const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const result = a.splice(3, 3, 'a', 'b', 'c');

console.log(a); */

/* const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const aa = a.slice(0, 3);

console.log(aa); */
/* Result: ['a', 'b', 'c', 'a', 'b', 'c', 'g', 'h']; */

/* альтернатива; */

/* const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const result = a.copyWithin(3, 0, 3);
console.log(result); */

/* const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = a.splice(5, 3, 0, 0, 0);
console.log(a); */

/* const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.fill(0, 5, -2)); */

/* Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10]; */

/* const a = [1, 2, [3, 4], [5, 6], 7];
let b = [a.fill(a)];
console.log(b); */

/* Result: [1, 2, 3, 4, 5, 6, 7]; */

/* const a = [1, 2, [3, 4], [5, 6], 7];
const b = [];
for (const i of a) {
  if (Array.isArray(i)) {
    b.push(...i);
  } else if (Array.isArray(i)) {
    b.push(i);
  }
}
console.log(b); */

/* const a = [1, 2, [3, 4], [5, 6], 7];
console.log(a.flat(1111)); */
/* const a = 'alona';
const b = a.split('');
const c = b.join(',');
Object.prototype.toString();


Array.from;  */

/* const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
const b = a.lastIndexOf('n');
console.log(b); */

/* for (const i of a) {
  let c = a.indexOf('n');
  console.log(c);
}
const c = a.includes('n');
console.log(c); */
/* for (let i = 0; i < a.length; i += -1) {
  let c = a.indexOf('n');
  console.log(c);
} */
/* Result: 5; */
/* let c;
for (let i = 0; i < a.length; i++) {
  if (a[i] === 'n') {
    c = i;
  }
  console.log(c);
}
 */

/* const a = [1, 2, 3, 4, 5, 6, 7];
const b = a.reverse();
console.log(b); */

/* Result: [7, 6, 5, 4, 3, 2, 1]; */

/* Write a function that reverse an integer number. You can't use any array methods, besides push.
reverseNumber(12345) returns 54321 */

/* function reverseNummbers(params) {
  let a = [];
  for (let index = params.length - params.length * 2; index < 0; index += 1) {
    const element = a.push(params[index]);
  }
  return a;
}
console.log(reverseNummbers([1, 2, 3, 4, 5])); */
/* let a = 12345;
let b = '';
console.log(a.length);
function f(a) {
  for (let i = 0; i < 10; i++) {
    let element = i;
  }
  return element;
}
console.log(f(a)); */
/* Result: [7, 6, 5, 4, 3, 2, 1]; */
/* console.log((b += a)); */
/* let a;
function reverseNumber(number) {
  for (let i = 0; i < number.length; i += 1) {
    if (i === number.length - 1) {
      a += i;
    }
    return number.number;
  }
  console.log(reverseNumber('12345'));
} */

/* function reverseNumber(number) {
  const string = String(number);
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return Number(newString);
}
console.log(reverseNumber(12345)); */

/* Write function, which returns array of keys of an object.
 */

/* const maxProfit = function (prices) {
  const min = Math.min(...prices);
  const max = Math.max(...prices.slice(prices.indexOf(min)));
  return max - min;
};

let go = [9, 1, 6, 2, 1];

console.log(maxProfit(go)); */
/* 
function maxProfit(price) {
  let minPrice = price[0];
  let maxProfit = 0;
  for (let index = 0; index < price.length; index++) {
    const element = price[index];
    if (element < minPrice) {
      minPrice = element;
    }
    if (element - minPrice > maxProfit) {
      maxProfit = element - minPrice;
    }
  }
  return maxProfit;
}

let go = [3, 2, 6, 2, 1];

console.log(maxProfit(go)); */

/* const maxProfit = function (prices) {
  const min = Math.min(...prices);
  const max = Math.max(...prices.slice(prices.indexOf(min)));
  return max - min;
};
let go = [8, 2, 6, 2, 3];

console.log(maxProfit(go)); */

/* function maxProfit(price) {
  let minPrice = price[0];
  let maxProfit = 0;
  for (let index = 0; index <= price.length - 1; index += 1) {
    let element = price[index];

    if (element - minPrice > maxProfit) {
      maxProfit = element - minPrice;
    }

    if (element < minPrice) {
      minPrice = element;
    }
  }
  return maxProfit;
}

const go = [9, 2, 6, 2, 1, 9];

console.log(maxProfit(go)); */

/* const cart = {
  item: [],
  getItem() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.table(cart.getItem());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'cherry', price: 110 });

console.table(cart.getItem()); */
