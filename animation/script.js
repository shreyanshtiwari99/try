
// scaling animation of the car
$(document).ready(function () {
    $(window).on("scroll", function () {
        let lock = $(this).scrollTop();
        let lockPos = lock * 0.0015;
        let scaleFactor = lockPos < 1 ? 1 : lockPos >= 3 ? 3 : lockPos;
        $(".car").css("transform", "scale(" + scaleFactor + ")");
    });
  }
)



// on refresh make scroll bar initial position 0
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//GSAP animations start
gsap.registerPlugin(ScrollTrigger);
//car entering into the screen animation
gsap.set(".car", { x: "100%" });
gsap.to(".car", { duration: 1, x: "0%" });
gsap.to(".front-tyre", { duration: 1, rotation: -720 });
gsap.to(".back-tyre", { duration: 1, rotation: -720 });
//braking animation when car stops
var mydiv = new TimelineMax();
mydiv
.fromTo(".side-car", 1, { y: 0 }, { y: 3 })
.to(".side-car", 1.5, { y: 0, ease: "elastic.out( 1, 0.3)" });


//car fading effects  
gsap.to('.car',{
  scrollTrigger:{
    trigger: '.car',
    start: "bottom -2199",
    toggleAction: 'restart pause reverse pause',
    scrub:2
},
    opacity:0
})
gsap.to('.car1', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -2200",
        toggleAction: 'restart pause reverse pause',
        scrub: 2
    },
    opacity:1
})
gsap.to('.car2', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -3000",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
gsap.to('.car3', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -3800",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
      },
    opacity:1
})
gsap.to('.car4', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -4600",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
gsap.to('.car5', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -5400",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
gsap.to('.car6', {
    scrollTrigger:{
        trigger: '.car',
        start: "bottom -6200",
        toggleAction: 'restart pause reverse pause',
        scrub: 2,
    },
    opacity:1
})
//rotation starts
gsap.to('.car7', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -6800",
        toggleAction: 'restart pause reverse pause',
        scrub: true
        
    },
    opacity:1
})
gsap.to('.car8', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -7400",
        toggleAction: 'restart pause reverse pause',
        scrub: true
        
    },
    opacity:1
})
gsap.to('.car9', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -8000",
        toggleAction: 'restart pause reverse pause',
        scrub: true
        
    },
    opacity:1
})
gsap.to('.car10', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -8600",
        toggleAction: 'restart pause reverse pause',
        scrub:true,
    },
    opacity:1
})
gsap.to('.car11', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -9200",
        toggleAction: 'restart pause reverse pause',
        scrub: true
    },
    opacity:1
})
gsap.to('.car12', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -9800",
        toggleAction: 'restart pause reverse pause',
        scrub: true
        
    },
    opacity:1
})
gsap.to('.car13', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -10400",
        toggleAction: 'restart pause reverse pause',
        scrub: true
        
    },
    opacity:1
})
gsap.to('.car14', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -11000",
        toggleAction: 'restart pause reverse pause',
        scrub: true

        },
    opacity:1,
   
})
//circle sensor animation
gsap.to('.circle', {
    scrollTrigger:{
        trigger: '.car',
        start: "top -11000",
        toggleAction: 'restart pause reverse pause',
        scrub:true,
    },
    display: "block"
})

