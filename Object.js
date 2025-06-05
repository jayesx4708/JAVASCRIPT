// using for of loop
// it is only used in arrays and strings

let arr=["MERN","JAVA","PYTHON","PHP"]
for (let i of arr){
    console.log(i);    
}

// let welcome={
//     name:"",
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



// -----------------------------------MAP-METHOD--------------------------------------- 

// let num=[3,6,7,9,2,15]
//    let newnum= num.map( (e)=>{
//         return e*2

//    })
//    console.log(newnum);
   
// let num=[3,6,7,9,12,15]
//    let newnum= num.map( (e)=>{
//         return e*e*e

//    })
//    console.log(newnum);

let num=[3,6,7,9,12,15]
   let newnum= num.map( (e)=>e*e )

   console.log(newnum);

   
// --------------------------------FILTER METHOD---------------------------------------
let num=[3,6,7,9,12,15]
   let newnum= num.filter( (e)=>{
        return e>5

   })
   console.log(newnum);
