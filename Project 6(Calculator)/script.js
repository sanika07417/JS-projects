let inp=document.querySelector("input");
let btns=document.querySelectorAll("button");
let get="";
Array.from(btns).forEach(function(button){
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            get=eval(get);
            inp.value=get;
        }
        else if(e.target.innerText=="AC"){
            get="";
            inp.value=get;
        }
        else if(e.target.innerText=="DEL"){
            get=get.substring(0,get.length-1);
            inp.value=get;
        }
        else{
            get+=e.target.innerText;
            inp.value=get;
        }
        
        
        console.log("Clicked value",get);
    })
})