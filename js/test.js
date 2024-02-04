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
    
    function calculateTax(amount, taxRate = 0.2) {
      const result = amount * taxRate;
      return result;
    }

    console.log(calculateTax(100, 0.2));

