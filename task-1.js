const age = 10;
const colors = [
  'tomato',
  'teal',
  'orange',
  'black',
  'green',
  'darkorange',
  '4k-desktop-background-hd-wallpaper-preview.jpg',
];

const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const randomColor = colors[index];
console.log(randomColor);

document.body.style.backgroundColor = randomColor; /* рандом цветов */

const totalPrice = 200.74;

const userNmae = 'Chelsy';

const message = 'Добро пожаловать!';

const sOpen = true;
const shouldConfirm = false;
const assssr = userNmae.toLowerCase();

/* console.log(age); */

let elementWidth = '50.25px';
/* console.log(Number.parseFloat(elementWidth)); */ /*  цифри з точкою а без Number.parseInt() */

let salary = 1300.10401;
salary = Number(
  salary.toFixed(3),
); /* обрезка после точки с привидением к числу */ /* возведение в степернь или (3 ** 2) */ /*  sqrt() в корень */ /* проверка на число  */
/* console.log(salary); */

/* console.log(Math.pow(3, 5)); */

/* console.log(isNaN('sOpen'));   */
/* 
const sqrt = Number(prompt('введите число'));
const qsrt2 = Number(prompt('введите степень'));    задачка на степеньь 
alert(`${sqrt ** qsrt2}`) */

/* const red = Math.round(3.6);     округление
console.log(red);
 */

const stringga = 'почему так получилось'; /* поиск */

/* console.log(stringga.includes('так'));  */

/* тернарное сравнение */
/* const balance = -10;

const massage = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(massage); */

const stars = 4;
let price;

/* switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;

  default:
    console.log('токое значение плохое');
    break;
}
 */

/* for (
  let i = Math.round(Math.random() * (10 - 1) + 1);
  i < 50 && i > 0;
  i += 1
) {
  const element = i;
  console.log(element);
}
 */
