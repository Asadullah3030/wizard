const menuIcon = document.querySelector(".menuIcon");
const menuClose = document.querySelector(".menuClose");
const navfull = document.querySelector(".navfull");

let tl = gsap.timeline();
let tl1 = gsap.timeline();

tl1.from(".logo", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.6,
});

tl1.from(".menuIcon", {
  y: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 0.3,
});

tl1.from(".menu h4", {
  y: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.3,
});

tl1.from(".menu button", {
  y: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.3,
});

tl1.from('.left-hero h1',{
    x:-200,
    duration:0.4,
    opacity:0,
})

tl1.from('.left-hero p',{
  x:200,
  duration:0.4,
  opacity:0,
})
tl1.from('.left-hero button',{
  duration:0.4,
  opacity:0,
})
tl1.from('.right-hero img',{
  duration:0.5,
  x:200,
  opacity:0,
},"-=1")


tl.pause()

menuIcon.addEventListener("click", () => {
    tl.to(navfull, {
    transform: "translateX(0%)",
    stagger: 0.3,
    duration: 0.5,
  });

  tl.from('.menuClose', {
    duration: 1,
    x:-40,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
  });

  tl.from('.mobileMenu h4', {
    duration: 1,
    y:-50,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
  });

  tl.from('.mobileMenu button', {
    duration: 1,
    y:-50,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
  });
  tl.play()
});

menuClose.addEventListener("click", () => {
    tl.from(navfull, {
    duration: 1,
    stagger: 0.3,
    duration: 0.5,
  });

  tl.to('.menuClose', {
    duration: 1,
    x:-40,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
  });

  tl.to('.mobileMenu h4', {
    duration: 1,
    y:-50,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
  });

  tl.to('.mobileMenu button', {
    duration: 1,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
  });
  tl.reverse()
});


gsap.to('.social-icon',{
    transform:'translateX(-60%)',
    duration:5,
    repeat:-1,
    ease:'none'
})

const section2 = () => {

  let box = gsap.timeline({
    scrollTrigger:{
      trigger:'.main-section',
      scroller:'body',
      start:'top 55%',
      end:'top -35%',
      scrub:1,
    }
  })
  
  box.from('.section1 h1',{
      y:-50,
      duration:1,
      opacity:0,
  })
  
  box.from('.section1 p',{
    y:100,
    duration:1,
    opacity:0,
  })
  
  box.from('.card1',{
    y:-100,
    duration:3,
    stagger:2,
    opacity:0,
  },"-=0.5")
}

section2()