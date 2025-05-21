// using for of loop
// it is only used in arrays and strings

let arr=["MERN","JAVA","PYTHON","PHP"]
for (let i of arr){
    console.log(i);    
}

// let welcome={
//     name:"Jayesh",
//     city:"Bhopal",
//     age:21
// }
// for (let i in welcome){
//     console.log(i);
    
// }

let welcome={
    name:"Jayesh",
    city:"Bhopal",
    age:21
}
for (let i in welcome){
    console.log(i+ "=>" + welcome[i]);
    
}