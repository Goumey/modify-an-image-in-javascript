let spacing=document.getElementById("spacing");
let color=document.getElementById("color");
let blure=document.getElementById("blure");
let image=document.getElementById("image")   
 image.style.backgroundColor=color.value;
spacing.addEventListener("change",function margin(){
// image.style.padding=spacing.value +"px";
image.style.padding=`${spacing.value}px`;
} )
color.addEventListener("change",function margin(){
    image.style.backgroundColor=color.value;
    } )
    blure.addEventListener("input",function margin(){
        image.style.filter="blur("+blure.value+"px)";
        } )
    console.log(blure.value)