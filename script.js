

const menu= document.querySelector(".menu")
const expand= document.querySelector(".expand")
const ProjCard= document.querySelectorAll(".ProjCard")
const pointer=document.querySelector("#mainpoint")
menu.addEventListener("click",()=>{
    expand.classList.remove("hidden");
    menu.classList.add("hidden");
})

window.addEventListener('scroll', () => {
    setTimeout(()=>{
    menu.classList.remove("hidden");
    expand.classList.add("hidden");
    },500)
   
});



// ProjCard.addEventListener("mouseenter",()=>{
//     projimg.classList.add("visible");

// })
// ProjCard.addEventListener("mouseleave",()=>{
//     projimg.classList.remove("visible");
// })

const scroll = new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth: true
});

let timeout;
function pointerskew(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",(dets) =>{
      
        xscale=gsap.utils.clamp(0.5,1.2,dets.clientX - xprev);
        yscale=gsap.utils.clamp(0.5,1.2,dets.clientY - yprev);

        xprev= dets.clientX;
        yprev= dets.clientY;
        
        mousepointer(xscale,yscale);

          clearTimeout(timeout);

        timeout= setTimeout(()=>{
          pointer.style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`; 
        },100)

    });
}

function mousepointer(xscale,yscale){
    window.addEventListener("mousemove",(dets) =>{
        pointer.style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

function firstpgAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:-10,
        opacity:0,
        duration:.6,
        // stagger:.2
        ease: "expo.easeInOut"
    })

        .to(".moveup",{
        y:0,
        // opacity:1,
        duration:0.6,
        stagger:.2,
        ease: "expo.easeInOut"
        })
       
        .to(".movedown",{
        y:0,
        opacity:1,
        duration:0.6,
        stagger:.2,
        ease: "expo.easeInOut"
        })

        .to("#heroFooter a",{
        y:0,
        opacity:1,
        duration:0.5,
        delay: -0.4,
        ease: "Expo.easeInOut"
    })
}

function imghover(){
    ProjCard.forEach(element => {
    const projimg= element.querySelector("img");
    var rotate= 0;
    var diffrot=0;


    element.addEventListener("mousemove",(dets)=>{
    var diff= dets.clientY - element.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate= dets.clientX;
    
    gsap.to(projimg,{
    opacity:1,
    ease: Power3,
    top: diff,
    left: dets.clientX, 
    rotate: gsap.utils.clamp(-20,20,diffrot),
    });

    element.addEventListener("mouseleave",()=>{
        gsap.to(projimg,{
            opacity:0,
        });
    })
});

})
};


imghover();
pointerskew();
firstpgAnim();
mousepointer();