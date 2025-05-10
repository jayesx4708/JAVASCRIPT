//anything under single(' ') or double quotes("") is considered as a string

// length() ------> Returns the length of the string 
// slice()  ------> Returns the elements between the two indexes of a string 
// concat() ------> Combines the text of two strings and returns a new string
// substring()----> Returns the elements between the two indexes of a string 
// replace() -----> Used to find a matching text and replaces the text with string 
// toUpperCase()--> Converts all the alphabets of a string into uppercase 
// toLowerCase()--> Converts all the alphabets of a string into lowercase 
// trim()   ------> Removes the leading and trailing white space and line terminator


let txt="    Hello World!     ";//trim() removes whitespace from both sides of a string
let txt1=txt.trim();
console.log(txt1)

// let text="Jayesh" //String
// console.log(text.length); //ans = 6


let text="This isStringfrom Cybrom" //ans = String
console.log(text.slice(7,13));  
