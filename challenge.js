/* const a = [{ a: 1, aa: 32 }, { b: 2 }, { c: 3 }, { d: 4 }];

const b = [...a];
console.log(`${b}`);
console.log(`${JSON.stringify(b)}`);
console.log(a);
 */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
apartament.owner = {
  name: 'Henry',
  phone: '982-126-1588',
  email: 'henry.carter@aptmail.com',
};

console.log(apartment);

/* Почему опасно?? */

function countTotalSalary(salaries) {
  let totalSalary = Object.values(salaries);

  return eval(totalSalary.join('+'));
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

function asd(...params) {
  const all = [];
  for (let index = 0; index < params.length; index++) {
    all.push(...params[index]);
  }
  /* Обьект внутри функции */
  const rrr = [{ a: 1, aa: 32 }, { b: 2 }, { c: 3 }, { d: 4 }];
  return all;
}
/* console.log(asd([1, 2, 3], [3, 2, 1])); */

const a = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
const c = [{ c: 3 }, { v: 2 }, { b: 3 }, { asd: 4 }];
console.log(asd(a, c));

console.log(`Функция 
${asd} 
Обьект вне функции
 ${a}`);
console.log(`${JSON.stringify(a)}`);
/* console.log(a); */
