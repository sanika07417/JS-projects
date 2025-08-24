let [seconds,minutes,hours]=[0,0,0];
let time=document.querySelector("#time");
let timer=null;
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");

const stopWatch=()=>{
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;

    time.innerHTML=h+":"+m+":"+s;
}

const watchStart=()=>{
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopWatch,1000)
}

const watchStop=()=>{
    clearInterval(timer);
}
const watchReset=()=>{
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    time.innerHTML="00:00:00";
}
start.addEventListener("click",watchStart);
stop.addEventListener("click",watchStop);
reset.addEventListener("click",watchReset);
