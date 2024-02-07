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

<<<<<<< Updated upstream
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

    function calculateTotalPrice(productName) {
      const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
      ];
      let totalPrice = 0;
      for(const product of products) {
        console.log(product.name);
        if(product.name === productName) {
        totalPrice = product.price * product.quantity;
        return totalPrice;
      } else {
          return `Product ${productName} not found!`
      }
        }
      
    }

console.log(calculateTotalPrice("Radar"));
    

    
=======
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

function summ(min, max) {
  let totalValue = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      totalValue += i;
    }
  }
  return totalValue;
}
console.log(summ(10, 50));
>>>>>>> Stashed changes
