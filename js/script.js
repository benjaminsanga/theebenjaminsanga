var tl = gsap.timeline();

//sequenced one-after-the-other
tl.to(".my-image", { rotation: 10, x: 50, duration: 1 }) //notice that there's no semicolon!
  .fromTo(".hey", { y: -300 }, { duration: 1, y: 0 })
  .fromTo(".socials", { x: -200 }, { duration: 1, x: 0 })
  .fromTo(".contacts", { x: 50 }, { duration: 3, x: 0 }); 
