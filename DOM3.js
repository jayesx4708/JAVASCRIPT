let myname= document.querySelector(".box")  //isko globally declare kar diya hai to isko baar baar har function me likhne ki jarurat nahi hai

let red=()=>{

    myname.style.border="2px solid black"
    myname.style.backgroundColor="red"
}

let green=()=>{
    
    myname.style.border="2px solid blue"
    myname.style.backgroundColor="green"
}

let reset=()=>{
    
    myname.style.border="2px solid black"
    myname.style.backgroundColor=""
}
