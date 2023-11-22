//variables
let linkSMR = document.getElementById("linkSMR");
let linkASIR = document.getElementById("linkASIR");
let linkDAW = document.getElementById("linkDAW");
let visor = document.getElementById("visor");
let info_title = document.getElementById("info_title");
let cajaSMR = document.getElementById("cajaSMR");
let cajaASIR = document.getElementById("cajaASIR");
let cajaDAW = document.getElementById("cajaDAW");
let footer = document.getElementById("footer");
let nav = document.getElementById("nav");

//functions

//function to change the information and image of the viewer. 
const cambiarInfo=(title)=>{
    let imagen = title.substring(0, title.indexOf("|") - 1)
    let texto = title.substring(title.indexOf("|") + 2)
    visor.style.backgroundImage="url(imagenes/"+imagen+")";
    info_title.textContent=texto;
}

//events
footer.addEventListener("mouseover",(event)=>{
    if(event.target.className == "caja"){   
       cambiarInfo(event.target.title)
    }
})
nav.addEventListener("click",(event)=>{
    if(event.target.tagName=="A"){
        cambiarInfo(event.target.title)
    }
})