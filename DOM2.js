//-----------------------------------------------------DOM --> DOCUMENT OBJECT MODEL-------------------------------------------------------------- 

let Callme=()=>{

    // document.getElementsByClassName("")
    // document.getElementById
    // document.querySelector(# .) //# for id and . for class

    let mytag= document.querySelector("#text")

     mytag.innerHTML="<p> Hello World </p>"
    //  mytag.textContent=""


    // window.alert("Hello i'm here")

}

let mecall=()=>{
    let mytag=document.querySelector(".text1")
    mytag.innerHTML="<p> I'm Jayesh </p>"
}