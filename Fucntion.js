// function in js to create an object
// 4 types of functions

// 1. arrow function
// 2. constructor function
// 3. anonymous function=has no value
// ============arrow function============
let obj = () => {
    console.log("hello");
}
obj(); // hello

// ============parameterized constructor function============
let obj1 = (name) => {
    console.log("hello "+name);
}
obj1("Jayesh");  //this is argument
let obj2=(a,b)=>{
    console.log(a+b);
}
obj2(6,7)



// Q1. CALCULATE TOTAL MARKS AND PERCENTAGE

let stud=(Subject1,Subject2,Subject3)=>{
return Subject1+Subject2+Subject3;
}
let  total=stud(35,49,23);
console.log( "total marks = "+total+ " & percentage "+total/3+"%");


// Q2. calculate simple interest
    let simpleInterest=(p,r,t)=>{
        return (p*r*t)/100;
    }
    let value=simpleInterest(100,5,2);
    console.log("your simple interest is "+value); // your simple interest is 100


// Q3. to add 3 numbers
    let add=(a,b,c)=>{
        return a+b+c; 
    }
    let sum2=add(5,6,7);
    console.log("your sum is "+sum2); // your sum is 18


// Q4. to check if number is positive or negative
    let check=(num)=>{
        if(num>0){
            return "positive";
        }
        else if(num<0){
            return "negative";
        }
        else{
            return "zero";
        }
    }
    let value1=check(5);
    console.log("your number is "+value1); // your number is positive


// Q5. calculate area of rectangle
let area=(l,b)=>{
    return l*b;
}
let value2=area(5,6);
console.log("your area is "+value2); // your area is 30
