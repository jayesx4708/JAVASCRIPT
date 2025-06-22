// ek hi button se text ko show or hide karna


let show=()=>{
    let text1=document.querySelector(".para")

    if(text1.style.display=="none")
       {
         text1.style.display="block"
       }
    else{
        text1.style.display="none"
    }    
}