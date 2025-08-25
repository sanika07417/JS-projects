const passwordBox=document.querySelector("#password");
let btn=document.querySelector("button");
let copyPass=document.querySelector(".copyPass");

const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()-_=[|]{}/";

const allChars=upperCase+lowerCase+number+symbol;

const passwordGenerator=()=>{
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

const copyPassword=()=>{
    const p=passwordBox.value;
    passwordBox.select();
    navigator.clipboard.writeText(p)
    .then(()=>{
        alert(`Password copied to clickboard! ${p}`);
    })
    .catch(err=>{
        console.error("Failed to copy : ",err);
    })
}
btn.addEventListener("click",passwordGenerator);
copyPass.addEventListener("click",copyPassword);
