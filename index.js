/* const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[fruits.length - 1];
console.log(lastElement); */

/* что это ?? */


const asd = ["apple", "peach", "pear", "banana"];
const lastElementIndex = asd.length -1;
const lastElement = asd[lastElementIndex];
// Change code below this line

/* console.log(lastElement);
 */// Change code below this line


/* function getExtremeElements(a) {
  // Change code below this line

  return [a[0], [a.length -1]];
  // Change code above this line

}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
 */
/* function calculateEngravingPrice(message,delimeter, pricePerWord) {
   // Change code below this line
    const splitMessage = message.split(delimeter);
       const asd = splitMessage
 
    return message, delimeter, pricePerWord;

   // Change code above this line
}
console.log(alculateEngravingPrice("JavaScript is in my blood" , " " , 10)); */
/* const arguasd = "asdasdasdasd asdasd";
const kolin = arguasd.split(" ");
console.log(arguasd.split(" "));
const opium = kolin.length;


console.log(opium);

const test = arguasd.split(" ").length * 2;
console.log(test); */



function slugify(title) {
  // Change code below this line
   const to = title.toLowerCase();
                                           /* ПОЧЕМУ!? */
   /* const endr = title.join("-"); */
return title.split(" ").join("-").toLowerCase();
  // Change code above this line
}
/* console.log(slugify("Arrays for begginers"));
 */

function calculateTotal(number) {
 // Change code below this line
  let result = 0 ;
for (let i = 0; i <= number; i += 1) { // Change this line
  result += i;
}

     return result;

  // Change code above this line
}

  // Change code above this line

/* console.log(calculateTotal(3)); */
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length ; i++) { // Change this line
  const fruit = fruits[i]; // Change this line
/*   console.log(fruit);
 */}

 function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
      total += order[i];        
    }
  // Change code below this line

  // Change code above this line
  return total;
}
/* console.log(calculateTotalPrice([12, 85, 37, 4])); */

function findLongestWord(string) {
  // Change code below this line
   let longestWorld = "";
   const newstring = string.split (" ");
   for (let i = 0; i < newstring.length; i += 1) {
      if (newstring[i].length > longestWorld.length) {
         longestWorld = newstring[i];
    }
}
      
   
   return longestWorld;

  // Change code above this line
}
const a = "asdasdasd asdasda sasdasd"
/* console.log(a.split(" ").length);
 *//* console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */


 function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i++) {
numbers.push(i)
}
  // Change code above this line
  return numbers;
}

/* console.log(createArrayOfNumbers(1, 3));
 */
function filterArray(numbers, value) {
   // Change code below this line
let result = [];
  for (i = 0; i <= numbers.length; i++ ) {
 if (numbers[i] > value) {
 result.push(numbers[i]);
 }
  }
return result;
  // Change code above this line
}

function getCommonElements(array1, array2) {
  // Change code below this line
let result = [];
   for (let i = 0; i <= array1.length; i++) {
      if (array2.includes(array1[i])) {
   
         result.push(array1[i])
}

   }

return result;
 // Change code above this line
}


function calculateTotalPrice(order) {
 total = 0;
  // Change code below this line

  for (const i of order) {
  total += i;
  }

  // Change code above this line
  return total;
}


function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
   

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}



function getEvenNumbers(start, end) {
   // Change code below this line
let result = [];
for (let i = start; i <= end; i++ ) {
if (i % 2 === 0) {
result.push[i]
}
}
return result
    // Change code above this line
}
/*   console.log(getEvenNumbers(6, 12));
 */


function includes(array, value) {
  // Change code below this line
for (let i = 0; i < array.length; i++) {
	if (array[i] === value) { 
 return array = true
    }

   }
return false// Change code above this line
}
/* console.log(includes([1, 2, 3, 4, 5], 3));
 */


/* const input = prompt("plese enter word");
if (input === "" || input === null || input.trim() === "") {

   alert("HI man")
}
else {
   if (input.length % 2 === 0) {
      const go = input.length / 2 + 1;
      alert("input")
   }
   
   
alert("Good man")
 }


console.log(input); */

// // Task 1. You need to calculate amount of tip to give in a restaurant/cafe.
// // 	Workflow:
// // 1.	User inputs check number. (Use “prompt” function).
// // 2.	User inputs tip percentage. (Use “prompt” function)
// // 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// // 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// // 5.	You need to calculate tip amount and total sum to pay.
// // 6.	Show message: (example). Use ”alert” function
// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230

// // You should show only 2 numbers after comma (if needed).

/* const price = prompt("enter price");
const priceProc = prompt("enter proc");
const pricNum = Number.parseFloat(price);
const procNum = Number.parseFloat(priceProc);
console.log(pricNum);
console.log(procNum);
if (price === null || priceProc === null || !pricNum || !procNum || procNum > 100 || procNum <= 0) {
    alert("Please don't do this")
 }
 if (priceProc > 100 && priceProc >= 0) {
      alert("Please don't do this")
   } 
else {
    
    if (!pricNum || !procNum) {

    alert("Please enter")
   } 
   if (Number.parseFloat(price) && Number.parseFloat(priceProc)) {
 alert((pricNum / 100 * procNum) + pricNum) 
    
       alert(`
      Check number: ${pricNum}
      Tip: ${priceProc + "%"}
      Tip amount: ${pricNum / 100 * procNum}
      Total sum to pay: ${(pricNum / 100 * procNum) + pricNum}
      `
      )
   } 
  
   
} */

// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230
/* alert((pricNum / 100 * procNum) + pricNum); */

/* if (priceProc < 100 && priceProc >= 0 && ) */

