const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body");
const colors = ["red","green","blue"];

colorBtn.addEventListener("click",renkDegistir);
let i=0;


function renkDegistir(){
    bodyBg.style.backgroundColor=colors[i];
    i++;
    if(i>colors.length-1){i=0}
    console.log(i);
}