var crsr=document.querySelector("#cursor");
var crsrBlur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrBlur.style.left=dets.x-200+"px"
    crsrBlur.style.top=dets.y-200+"px"
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1,
    }
})

gsap.to("#container",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        markers:true,
        strat:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})