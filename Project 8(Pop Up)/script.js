let popUp=document.querySelector(".popUp");
let openPopUp=document.querySelector(".open-PopUp");
let closePopUp=document.querySelector(".close-PopUp");

openPopUp.addEventListener("click",()=>{
    popUp.classList.add("open-PopUp");
});
closePopUp.addEventListener("click",()=>{
    popUp.classList.remove("open-PopUp");
})