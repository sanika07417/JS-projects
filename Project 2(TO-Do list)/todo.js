let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);

    let delBtn=document.createElement("button");
    delBtn.innerHTML = ("\u00D7");
    item.appendChild(delBtn);
    
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let listItem=event.target.parentElement;
        listItem.remove();
    };
})