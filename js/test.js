// function normalizeInput(input, to) {
//     if(to === "upper") {
//         return input.toUpperCase();
//     } else if (to === "lower") {
//         return input.toLowerCase();
//     } 
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// function checkForName(fullName, firstName) {
//   const lowerFullName = fullName.toLowerCase();
//   const lowerFirstName = firstName.toLowerCase();
//  return lowerFullName.includes(lowerFirstName);
// }

// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Caty Stars", "cAtY"));


// function getFileName(file) {
//   const dotEnter = file.indexOf(".");
//   console.log(dotEnter);
//     if(dotEnter === -1) {
//       return file.slice();
//     } else {
//       return file.slice(0, dotEnter);
//       }
//     }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.css"));
// console.log(getFileName("app"));
// console.log(getFileName("."));

// function createFileName(name, ext) {
  //     const newName = name.trim();
  //     const newExt = ext.trim();
  //     return `${newName}${newExt}`
  //   }
  
    // function checkStorage(storage, item) {
    //   const itemNormalazed = item.toLowerCase();
    //   console.log(itemNormalazed);
    //   if(storage.includes(itemNormalazed)) {
    //     return `${item} is available to order!`;
    //   } else {
    //     return "Sorry! We are out of stock!";
    //   }
    // }
  
    // function getCommonElements(array1, array2) {
    //   const newArray = [];
    //   for(let i = 0; i < array1.length; i++) {
    //     if(array2.includes(array1[i])) {
    //       newArray.push(array1[i]);
    //     }
    //   }
    //   return newArray;
    // }
  
    
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


    // function createReversedArray() {
    //   const argumentsArray = Array.from(arguments);
    //   return argumentsArray.toReversed();
    // }
    // console.log(createReversedArray(5, 12 , 20));

  
    // function createReversedArray() {
    //   const argumentsArray = Array.from(arguments);
    //   let reversedArray = [];
    //   for(let i = argumentsArray.length - 1; i >= 0; i--) {
    //     console.log(argumentsArray[i]);
    //     reversedArray.push(argumentsArray[i]);
    //   }
    //   return reversedArray;
    // }

    // console.log(createReversedArray(5, 12 , 20));
    
    // function calculateTax(amount, taxRate = 0.2) {
    //   const result = amount * taxRate;
    //   return result;
    // }

    // console.log(calculateTax(100, 0.2));


    // const apartment = {
    //   descr: "Spacious apartment in the city center",
    //   rating: 4,
    //   price: 2153,
    // };
    
    // const keys = [];
    // const values = [];
    //   for(const key in apartment) {
    //     keys.push(key);
    //     velues.push(apatment[key]);
    //   }

    // function countTotalSalary(salaries) {
    //   let totalSalary = 0;
    //   const valuesArray = Object.values(salaries);
    //   console.log(valuesArray);
    //   for(const element of valuesArray) {
    //     totalSalary += element;
    //   }
    //   return totalSalary;
    // }

    // console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

    // function getAllPropValues(propName) {
    //   const products = [
    //     { name: "Radar", price: 1300, quantity: 4 },
    //     { name: "Scanner", price: 2700, quantity: 3 },
    //     { name: "Droid", price: 400, quantity: 7 },
    //     { name: "Grip", price: 1200, quantity: 9 },
    //   ];
    //   const propertyArray = [];
    //   for(const product of products) {
    //     if(product[propName] !== undefined) {
    //       console.log(product[propName]);
    //     propertyArray.push(product[propName]);
    //   }
    //     }
    //   return propertyArray;
    // }
    
    // console.log(getAllPropValues("name"));

//     function calculateTotalPrice(productName) {
//       const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//       ];
//       let totalPrice = 0;
//       for(const product of products) {
//         console.log(product.name);
//         if(product.name === productName) {
//         totalPrice = product.price * product.quantity;
//         return totalPrice;
//       } else {
//           return `Product ${productName} not found!`
//       }
//         }
      
//     }

// console.log(calculateTotalPrice("Radar"));
    

    
// =======
// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// function chekA(a) {
//   if (a === 10) {
//     return "Вірно";
//   } else {
//     return "Невірно";
//   }
// }

// console.log(chekA(10));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// function checkA(a) {
//   let result;
//   switch (a) {
//   case1 1: 
//     result = 'зима';
//     break;
//   case2 2:
//     result = 'весна';
//     break;
//   case3 3:
//   result = 'літо';
//   break;
//   case4 4:
//   result = 'осінь';
//   default: 'Введіть від 1 до 4!'
// }
// return result;
// }

// consol.log(checkA('2'));

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// function modifiedTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, 0);
//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, 0);
//   return `${modifiedHours}:${modifiedMinutes}`;
// }

// console.log(modifiedTime(69));

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const login = prompt('Введіть логін');

// function checkLoginPass(login) {
//   if (login === 'Адмін') {
//     const password = prompt('Введіть пароль');
//     if (password === 'Я головний') {
//       alert("Добрий день!"); 
//     } else {
//       alert("Невірний пароль!");
//     }
//   } else if(!login) {
//     alert("Скасовано"); 
//   } else {
//     alert("Я вас не знаю");
//   } 
// }

// console.log(checkLoginPass(login));

//За допомогою циклу for додайте всі парні числа від min до max

// function summ(min, max) {
//   let totalValue = 0;
//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//       totalValue += i;
//     }
//   }
//   return totalValue;
// }
// console.log(summ(10, 50));
// >>>>>>> Stashed changes

// Find the difference between the sum of the squares of the first n natural numbers(1 <= n <= 100) 
// and the square of their sum.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of 
// the squares of those numbes is: 3025 - 385 = 2640

// function differenceSums(n) {
//   let squareSum = 0;
//   let sumOfSquare = 0;
//   for (i = 0; i <= n; i++) {
//     squareSum += i;
//     sumOfSquare += i ** 2
//       ;
//   }
//   squareSum *= squareSum;
//   return squareSum - sumOfSquare;
// }
// console.log(differenceSums(10));


// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

// function concatenateDidgSquares(numb) {
//   const stringNum = String(numb);
//   let result = [];
//   for (let i = 0; i < stringNum.length; i++) {
//     result.push((stringNum[i])**2);
//   }
//   return Number(result.join(""));
// }

// console.log(concatenateDidgSquares(765));

// function concatenateDidgSquares(num) {
//   const arrayNum = String(num).split("");
//   let result = [];
//   for (const element of arrayNum) {
//     result.push(element ** 2);
//   }
//   return Number(result.join(""));
// }

// console.log(concatenateDidgSquares(3212));

// function concatenateDidgSquares(num) {
//   // const arrayNum = String(num).split("");
//   // let result = [];
//   // for (const element of arrayNum) {
//   //   result.push(element ** 2);
//   // }
//   return +num.toString().split('').map(i => i*i).join('');
// }

// console.log(concatenateDidgSquares(3212));

// const changeEven = (numbers, value) => {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     }
//   }
//   return newArray;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.Ignore capitalization 
// when determining if a character is a duplicate.

// function duplicateEncode(word){
//   const newArray = word.toLowerCase().split("");
//   const resultArray = [];
//   for (const element of newArray) {
//     let counter = 0;
//     for (const count of newArray) {
//       if (element === count) {
//         counter += 1;      }
//     }
//     counter > 1 ? resultArray.push(")") : resultArray.push("("); }
//   return resultArray.join("");
// }



// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split("")
//     .map((element, index, array) => {
//       return array.indexOf(element) == array.lastIndexOf(element) ? '(' : ')'
//     })
//     .join('');
// }

// console.log(duplicateEncode('Success'));


// var isSquare = function(n){
//   return Math.sqrt(n) % 1 === 0 ? true : false; // fix me
// }

// console.log(isSquare(25));

// function XO(str) {
//   let iv = 0;
//   const varX = str
//     .toLowerCase()
//     .split("")
//     .map(e => e === 'x' ? 1 : 0 )
//     .reduce((a, e) => a + e, iv,)
  
//   const varO = str
//     .toLowerCase()
//     .split("")
//     .map(e => e === 'o' ? 1 : 0)
//     .reduce((a, e) => a + e, iv,)
  
//   return varX === varO;
// }

// function XO(str) {
//   return str.match(/x/gi).length === str.match(/o/gi).length;
// }

// console.log(XO('oooXXX'));

// function getSum(a, b) {
//   let total = 0;
//   if(a < b) {
//     for (let i = a; i <= b; i++) {
//     total += i;
//     };
//   } else if (a > b) {
//     for (let i = a; i >= b; i--) {
//       total += i;
//     }
//   } else {
//         return a;
//       }
//   return parseInt(total);
// }

// console.log(getSum(-1, 2));

// function isPrime(num) {
//   if (num <= 1) { return false; }
//   if (num <= 3) { return true; }
//   if (num % 2 === 0 || num % 3 === 0) { return false; }
//   const limit = Math.sqrt(num);
//   for (let i = 5; i <= limit; i += 6){
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(73));


// function findOutlier(integers){
//   const oddIntegers = integers
//     .filter(element => element % 2 !== 0).join("");
//   const evenIntegers = integers
//     .filter(element => element % 2 === 0).join("");
//   return oddIntegers.length < evenIntegers.length ? Number(oddIntegers) : Number(evenIntegers);
// }

// console.log(findOutlier([1, 2, 3]));

// DESCRIPTION:
// A child is playing with a ball on the nth floor of a tall building. 
// The height of this floor above ground level, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// function bouncingBall(h, bounce, window) {
//   let counter = -1;
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     for (let i = h; i > window; i *= bounce) {
//     counter += 2;
//   }
//     return counter;
//   }
// }

// console.log(bouncingBall(30, 0.66, 1.5))

// function towerBuilder(nFloors) {
//   const resultPyramid = [];
//   for (let i = 0; i < nFloors; i++){
//     let spaces = " ".repeat(nFloors - i - 1);
//     let stars = "*".repeat(2 * i + 1);
//     resultPyramid.push(spaces + stars + spaces);
//   }
//     return resultPyramid;
//   }


// console.log(towerBuilder(5));

// function expandedForm(num) {
//   // const resultArray = [];
//   // const numArray = num.toString().split('');
//   // console.log(numArray.reverse());
//   // numArray.forEach((element, i) => {
//   //   resultArray[i] = element + "0".repeat(i);
//   // });
  
//   // return resultArray.reverse().join(" + ");
//   const resultArray = [];
//   num
//     .toString()
//     .split('')
//     .map((element, i, array) => {
//       return element > 0 ?
//       resultArray.push(element + "0".repeat(array.length - (i + 1)))
//       : "0";
//     })
//     ;
//   return resultArray.join(' + ');
// }

// console.log(expandedForm(7052));

// function isArmstrong(num) {
//   return num === num
//     .toString()
//     .split('')
//     .map((e, i, array) => Math.pow(e, array.length))
//     .reduce((a, c) => a + c)
//     ;
// }

// console.log(isArmstrong(153));

// function count(string) {
//   let resultObj = {};
//   string
//     .split('')
//     .map((elem, i, arr) => {
//       resultObj[elem] = arr
//         .filter(e => e === elem).length;
//     })
//   return resultObj;
//   }

//   console.log(count('aga'))

// function decodeMorse(str) {
//   return MORSE_CODE[str];
// }

// console.log(decodeMorse('....'));

// decodeMorse = function(morseCode) {
//     outPut = "";

//     for (var i = 0; i < morseCode.split(" ").length; i++) {
//         if (i === "   ") {
//             outPut += " ";
//         } else {
//             outPut += MORSE_CODE[morseCode.split(" ")[i]];
//         }

//     }
//     return outPut;
// }

// console.log(decodeMorse('".... . -.--" "-- .- -."'));

// const getUserEmails = (users) => {
//   const resultArr = [];
//   users.map(user => {
//     resultArr.push(user.email);
//   });
//   return resultArr;
// }

// console.log(getUserEmails([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]));


// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer));

// function moveZeros(arr) {
//   const noZero =[];
//   const zeroArray = [];
//   arr.map(elem => elem !== 0 ? noZero.push(elem) : zeroArray.push(elem));
//   return noZero.concat(zeroArray);
// }

// function moveZeros(arr) {
//   return arr.filter(elem => elem !== 0).concat(arr.filter(elem => elem === 0));
// }

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

// function longestSlideDown(pyramid) {
//   for (let row = pyramid.length - 2; row >= 0; row--) {
//       for (let col = 0; col <= row; col++) {
//           pyramid[row][col] += Math.max(pyramid[row + 1][col], pyramid[row + 1][col + 1]);
//       }
//   }
//   return pyramid[0][0];
// }

// function longestSlideDown(pyramid) {
//   return pyramid.reduceRight((prevVal, curVal, i, arr) => curVal.map(
//     (elem, iter)=> prevVal[iter] > prevVal[iter+1] ? elem + prevVal[iter] : elem + prevVal[iter+1] 
//   ))[0]
// }

// console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));

// const digitObj = {
//   one : 1,
//   two : 2,

//   // sconst plus = this.fPlus,

//   fPlus(a, b, oper){
//     if(oper === 'plus') {return a + b;}
//     if(oper === 'minus') {return a - b;}
//   }
// };

// function readInput(inp) {
//   const arr = inp.split('(');
//   console.log(arr);

// }
// const a = 'one';
// console.log(digitObj[a]);
// console.log(digitObj.fPlus(digitObj.one, digitObj.two, 'plus')); 

// function zero(func) {return func ? func(0) : 0};
// function one(func) {return func ? func(1) : 1};
// function two(func) {return func ? func(2) : 2};
// function three(func) {return func ? func(3) : 3};
// function four(func) {return func ? func(4) : 4};
// function five(func) {return func ? func(5) : 5};
// function six(func) {return func ? func(6) : 6};
// function seven(func){return func ? func(7) : 7};
// function eight(func) {return func ? func(8) : 8};
// function nine(func) {return func ? func(9) : 9};

// function plus(b) {
//   return function(a) {
//     return a + b};
// };
// function minus(b) {
//   return function(a) {
//     return a - b;
//   };
// };
// function times(b){
//   return function(a) {
//     return a * b;
//   };
// }
// function dividedBy(b) {
//   return function(a) {
//     return Math.floor(a / b);
//   };
// };

// console.log(seven(times(five())));
// console.log(four (plus     (nine ())));


// function func(times, value) {
//   const accum = new Array(times).fill(value);
//   return accum;
// }

// console.log(func(3, 'a'));

// function reverse(arr){
//   const reversed = arr.map((elem, ind, array)=>
//   // array[array.length-ind-1];
//   console.log(array[array.length-ind-1]) );
//   return reversed;
// }

// function fromPais(array) {
  
  // const resObj = {};
  // for(let i = 0; i < array.length; i++){
  //   const resArr = [];
  //   resArr.push(...array[i]);
  //   resObj[resArr[0]] = resArr[1];
  // }
  // return array.reduce((accum, elem)=>{
    // if(Array.isArray(elem)) {
      // accum[elem[0]]=elem[1];
    // }
    // return accum;
  // }, {})
// }

// console.log(fromPais([['a', 1], ['b', 2], ['c', 3]]));

// class User {
//   static roles = {
//     admin: 'admin',
//     manager: 'manager',
//     editor: 'editor',
//     guest: 'guest'
//   }
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;
//   #phone;
//   #role;

//   constructor(param) {
//     this.name = param.name;
//     this.#email = param.email;
//     this.#phone = param.phone;
//     this.#role = User.roles.guest;
//     User.#takenEmails.push(param.email);
//   }
//   get takenEmails() {
//       return User.#takenEmails;
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   } 

//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     if(!this.#validateEmail(newEmail)) {
//       console.log('Invalid email format');
//     } else
//     if(User.isEmailTaken(newEmail)){
//       console.log('This email is allready exist');
//     }
//     else {
//       this.#email = newEmail;
//       User.#takenEmails = newEmail;
//     }
//   }
//   #validateEmail(email){
//     return email.includes('@');
//   }
//   get phone() {
//     return this.#phone;
//   }
//   set phone(newPhone) {
//     this.#phone = newPhone;
//   }
// }

// const newCard = new User({
//   name:'Alex',
//   email: 'a_nester@ukr.net',
//   phone: '0977777777'});

// console.log(newCard);
// newCard.phone = '0971111111';
// console.log(newCard.phone);
// console.log(newCard.getEmail());
// newCard.changeEmail("alexukr.net");
// console.log(newCard.getEmail());
// console.log(newCard.role);
// newCard.role = User.roles.editor;
// console.log(newCard.role);
// newCard.changeEmail("a_nester123@ukr.net");
// newCard.changeEmail("a_nester564@ukr.net");
// newCard.changeEmail("a_nester333@ukr.net");

// console.log(newCard.getEmail());
// console.log(newCard.takenEmails);


//-------

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, access }) {
//     super(email);
//     this.access = access;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

//-------


// const user = {
//   name: "Alice",
//   showThis() {
//     console.log("this", this);
//   }
// }

// user.showThis()

// function foo(callback) {
//   console.log(callback);
//   callback()
// }

// foo(user.showThis)

//-----

// const book = {
//   title: "React",
//   showThis() {
//     console.log("this", this);
//   },
//   showTitle() {
//     console.log("title", this.title);
//   }
// }

// const show = book.showTitle;
// show()

//------

// const chopShop = {
//   stones: [
//     {name: "Emerland", price: 1300, quantity: 4},
//     {name: "Diamond", price: 2700, quantity: 3},
//     {name: "Sapphire", price: 1400, quantity: 7},
//     {name: "Ruby", price: 800, quantity: 2}
//   ],
//   calcTotalPrice(name) {
//     const stone = this.stones.find(elem => elem.name === name);
//     if(!stone) {
//       return `${name} not find`;
//     } else {
//       return stone.price * stone.quantity; 
//     }
//   }
// }

// console.log(chopShop.calcTotalPrice("Ruby"));

//----

// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(`Auto ${this.brand} accelerate. Speed ${this.speed}`);
//   },
//   decrease() {
//     if(this.speed <=0){
//       console.log(`Auto is stoped`);
//     }
//   }
// }


//----
// const SAFE_SPEED = 60;

// const tesla = {
//   brand: "tesla",
//   speed: 30
// }

// const bmw = {
//   brand: "bmw",
//   speed: 70
// }

// function speedSensor(maxSpeed) {
//   return this.speed <= maxSpeed ?
//   // if(this.speed <= maxSpeed) {
//    `Auto ${this.brand} is safety speed` :
//   // }
//    `${this.brand} NO SAFETY SPEED`;
// }

// console.log(speedSensor.call(bmw, SAFE_SPEED));

// class User {
//   #password;
//   #email;
//   constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.#email = email;
//   }
//   showName() {
//     if(this.#checkPassword()) {
//       console.log(`Hellow, my name is ${this.name}`);
//     }
//     else {
//       console.log("Who are you?");
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }

//   get email() {
//     if(this.#checkPassword()) {
//       return this.#email;
//     }
//   }

//   set email(newEmail) {
//     if(this.#checkPassword()) {
//       this.#email = newEmail;
//     }
//   }
// }

// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// // console.log(student.password);
// console.log(student);
// console.log(student.email);

// class User {
//   #name;
//   #surname;

//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year){
//     super(name, surname);
//     this.year = year;
//   }

//   getCourse() {
//     const currentTime = new Date();
//     const currentYear = currentTime.getFullYear();

//     const diff = currentYear - this.year;

//     if(diff > 5) {
//       return `Student is graduated`;
//     }
//     return `${diff} course`;
//   }
// }

// const student = new Student("Petrik", )

// class Hero {
//   static counter = 0;
//   static addHero() {
//     Hero.counter += 1;
//     console.log(`Quantity of added heros ${Hero.counter}`);
//   }
//   #level;
//   constructor(name) {
//     this.name = name;
//     this.#level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }

//   attack(){
//     console.log(`Attack with 10 damage`);
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero('Bloodseker');
// const bloodseker1 = new Hero('Bloodseker1');
// const bloodseker2 = new Hero('Bloodseker2');
// bloodseker.attack();
// console.log(bloodseker);
// console.log(bloodseker.heal());
// console.log('Counter', Hero.counter);

// function getUsersWithAge(array, minAge, maxAge) {
//   return array.filter(elem =>elem.age >= minAge && elem.age <= maxAge);
// }



// function sumIntervals(arr) {
//   const newArr = arr.map((elem, i)=> elem );
//   console.log(newArr);
// }

// sumIntervals( [
//   [1, 5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11]
// ] )


// Task 4

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function sumIntervals(arr) {
//   const newArr = arr.map((elem, i)=> elem );
//   console.log(newArr);
// }
