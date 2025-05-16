
// let Fruits= ["Apple", "Mango", "Banana", "Grapes"]

// // let ans= Fruits.slice(1,3)  //ans-->[ 'Apple', 'Mango', 'Banana', 'Grapes' ]

// let ans= Fruits.splice(2,0,"Papaya") //ans-->[ 'Apple', 'Mango', 'Papaya', 'Banana', 'Grapes' ]
// // where to add(2), how many to delete(0), what to add("Papaya")

// console.log(Fruits);


// -----------CONCAT----------
// let arr1=[1,4,6,7]
// let arr2=[2,6,8,9]
// let arr3=[3,6,8,9]

// console.log(arr1.concat(arr2,arr3));

// -----------REVERSE----------
// let arr1=[1,4,7,9,6,3]
// console.log(arr1.reverse());

// -----------CONVERSION----------
// let num=75698
// let n= Number(num.toString().split('').reverse().join(''));

// console.log(typeof(n));

// -----------Destructuring----------
let arr= ["Apple", "Mango", "Banana", "Grapes"]
const [a,b,c]= arr //destructing
console.log(c);

