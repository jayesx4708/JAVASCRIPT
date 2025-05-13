//anything under single(' ') or double quotes("") is considered as a string

// length() ------> Returns the length of the string 
// slice()  ------> Returns the elements between the two indexes of a string 
// concat() ------> Combines the text of two strings and returns a new string
// substring()----> Returns the elements between the two indexes of a string 
// replace() -----> Used to find a matching text and replaces the text with string 
// toUpperCase()--> Converts all the alphabets of a string into uppercase 
// toLowerCase()--> Converts all the alphabets of a string into lowercase 
// trim()   ------> Removes the leading and trailing white space and line terminator

// let text="Jayesh" //String
// console.log(text.length); //ans = 6


// let text="This isStringfrom Cybrom" //ans = String
// console.log(text.slice(7,13));  

// 
let txt="Hello World!     ";
let txt1=txt.trim();
console.log(txt1)


// ----------length----------
let a="jayesh";
console.log(a.length);

// ----------slice----------
let b="Lake City!";
let c=b.slice(1,6);
console.log(c);

// ----------concat---------
let d1="Jayesh";
let d2="krrish!";
let d3=d1.concat(" ",d2);
console.log(d3);

// ----------uppercase---------
let d="jayesh";
let e=d.toUpperCase();
console.log(e);

// ----------lowercase---------
let f="JAYESH";
let g=f.toLowerCase();
console.log(g);

// ----------substring---------
let h="BMW M5 CS!";
let i=h.substring(1,6);
console.log(i);






















// ----------replace---------   
let j="Hello World!";
let k=j.replace("World","hehehe");
console.log(k);