// ----------replace--------
let text = "this is string & String of js"
console.log(text.replace("String","Cybrom"));

// ----------replace-all--------
let text1 = "this is string & string of js"
console.log(text1.replaceAll("string","Cybrom"));

// --------global-replace-------
let text2 = "this is string & string of js"
console.log(text2.replace(/string/g,"Cybrom"));

// // --------global-replace-case-insensitive-------
let text3 = "this is string & string of js"
console.log(text3.replace(/string/gi,"Cybrom"));

// ----------charAt---------
let l="Bhopal city!";
let m=l.charAt(7);
console.log(m);

// ----------charCodeAt---------
let n1="Lake City!";
let o1=n1.charCodeAt(4);
console.log(o1);

// ----------indexOf---------
let n="Lake City!";   
let o=n.indexOf("e");
console.log(o);

// ----------lastIndexOf---------
let p="Lake City!";
let q=p.lastIndexOf("k");
console.log(q);