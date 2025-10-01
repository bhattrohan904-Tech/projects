/* smooth scrolling
       attach loco css 
       attach locomotive scroll min js
       some code from loco github for js
gsap
       attach gsap
       
scroll trigger*/
var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanim(){
    var t1=gsap.timeline();
     t1.from("#nav",{
        y:'10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
     })
     .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger: .2
     })
     .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
     })
}

// jab mouse move ho to humlog skew kar paye aur maximum skew and minimum skew define kar paaye, jab mouse move ho to chapta ki value badha ,aur jab ,ous chalna band ho jaye to chapata hata lo

function circlechaptakaro() {
    
var xscale=1;
var yscale=1;

var xprev=0;
var yprev=0;
    window.addEventListener("mousemove",function(dets){

        clearTimeout(timeout);

        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;

        
        
       xscale= gsap.utils.clamp(.8,1.2,xdiff);        
       yscale=gsap.utils.clamp(.8,1.2,ydiff);        

        xprev=dets.clientX;
        yprev=dets.clientY;

        timeout=this.setTimeout(function(){
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100)
        
    });
circlechaptakaro();
}
function circlemousefollower(){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
circlemousefollower();
firstpageanim();


//teeno elements ki select karo, uske baad teeno par ek mousemove ho to ye pata karo ki mouse kaha par hai, jiska matalab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ki show kari and us image ki move karo, move karte waqt rotate karo, and jaise jaise mouse ez chalw waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});