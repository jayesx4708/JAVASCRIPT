// ARRAY KO "[]" SQUARE BRACKET ME LIKHTE HAIN HUMESHA

// let Fruits= ["Apple" , "Mango" , "banana"]

// // let fru = new Array(1,2,3,4,5)
// console.log(Fruits);

let fruits=["Banana","Orange","Apple","Mango"];

fruits.pop();                        //Removes the last element from the array
fruits.push("Kiwi");                 //Adds a new element to the end of the array
fruits.shift();                      //Removes the first element from the array
fruits.unshift("Lemon");             //Adds a new element to the beginning of the array
fruits.splice(2,0,"Lemon","Kiwi");   //Adds new elements at a specified position in the array

// console.log(fruits.length);

console.log(fruits[1]);              //Array value access