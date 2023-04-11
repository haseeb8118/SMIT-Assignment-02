// /*
//     Write a function that creates a closure and returns a function that can add
//     a specific number to any number passed to it. For example, if the closure is
//     created with 5, the returned function should add 5 to any number passed
//     to it.
// */
// function closeFunction(val1){
//     return function(val2){
//         return val2 + val1;
//     }
// }
// let closeFunctioncall = closeFunction(5);
// console.log(closeFunctioncall(15));



// // /* ----------------------------------------------------- */


// /*
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
// */

// const tempArray = [3, 10, 18, 20, 30, 40, 50, 60, 70];

// function searchArray(arrayName, valueTofind) {
//     if (arrayName.length === 0) {
//         return false;
//     }
//     if (arrayName.find(element => element === valueTofind)) { 
//         return true;
//     } 
//     else {
//         return searchArray(arrayName.slice(1), valueTofind); 
//     }
// }
// let num = 30;

// let valueFind = searchArray(tempArray, num);
// console.log(num + " " + valueFind);
// num = 33
// valueFind = searchArray(tempArray, num);
// console.log(num + " " + valueFind);



// /* ----------------------------------------------------- */


// /*
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
// */


// function addParagraph(val1){
//     let newParagraph = document.createElement('p'); 
//     let newText = document.createTextNode(val1); 
//     newParagraph.appendChild(newText); 
//     document.body.appendChild(newParagraph);  
// }

// addParagraph("This paragraph automatically added by javascript by using a Function");


// /* ----------------------------------------------------- */



// /*
//     Write a function that adds a new list item to an unordered list in an HTML
//     document. The function should take a string argument that will be used as
//     the text content of the new list item.
// */


// function addListitem(val2){
//     let newListitem = document.createElement('li'); 
//     let newText = document.createTextNode(val2); 
//     newListitem.appendChild(newText); 
//     let parentList = document.querySelector('#assignment04'); 
//     parentList.appendChild(newListitem); 
// }

// addListitem("This list item automatically added by javascript by using a function");



// /* ----------------------------------------------------- */

// /*
//     Write a function that changes the background color of an HTML element.
//     The function should take two arguments: the first argument is a reference
//     to the HTML element, and the second argument is a string representing
//     the new background color.
// */

// function setBackgroundColor(element, newBackgroundColor){
//     let parentElement = document.querySelector(element);
//     parentElement.style.backgroundColor = newBackgroundColor;
// }
// document.getElementById("changeColor").addEventListener("click", function() {
//     setBackgroundColor(".assignment05", "#000");
//   });



// /* ----------------------------------------------------- */


// /*
//     Write a function that saves an object to localStorage. The function should
//     take two arguments: the first argument is a string representing the key to
//     use for storing the object, and the second argument is the object to store.
// */

// function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
// const tempObject = [3, 10, 18, 20, 30, 40, 50, 60, 70];
// saveToLocalStorage("justaKeyName", tempObject);


// /* ----------------------------------------------------- */


// /*
//     Write a function that retrieves an object from localStorage. The function
//     should take one argument, which is a string representing the key used to
//     store the object. The function should return the object.
// */


// function getObjFromLocalStorage(key) {
//     let prevObject = localStorage.getItem(key);
//     if (prevObject) {
//       return JSON.parse(prevObject);
//     } else {
//       return "not found";
//     }
//   }

//   let objRetuned = getObjFromLocalStorage("justaKeyName");
//   console.log(objRetuned);



// /* ----------------------------------------------------- */


// /*
//     Question # 8. Write a function that takes an object and saves each property to
//     localStorage using the property name as the key and the property value as
//     the value. The function should also retrieve the object from localStorage
//     and return it as a new object.
// */

// function saveObjToLocalStorage(obj) {
//     for (let propt in obj) {
//       localStorage.setItem(propt, obj[propt]);
//     }
//     let newObj = {};
//     for (let propt in obj) {
//       newObj[propt] = localStorage.getItem(propt);
//     }
//     return newObj;
//   }

// let myObj = {
//     name: "Abdul Haseeb",
//     age: 21,
//     city: "Karachi",
// };
// let newObj = saveObjToLocalStorage(myObj);
// console.log(newObj);