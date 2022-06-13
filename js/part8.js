gsap.set("#step-1-square", { x: 200, y: 0 , opacity:0, scale:0.2})
gsap.set("#step-2-square", { x: -200, y: 0, opacity:0, scale:0.2 })
gsap.set("#step-3-square", { x: 200, y: 0, opacity:0, scale:0.2 })
gsap.set("#step-4-square", { x:-200, y: 0, opacity:0, scale:0.2 })


let tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".part_8 "+".part_9",
      start: "+=2000px top",
      pin: true,
      scrub: true,
      end : "100%-=1500px bottom" ,
      markers: true,
  }
});
tl.to("#step-1-square", { x: 0, duration: 6, opacity:1, scale:1})
.to("#step-2-square", { x: 0, duration: 6, opacity:1, scale:1 })
.to("#step-3-square", { x: 0, duration: 6, opacity:1, scale:1 })
.to("#step-4-square", { x: 0, duration: 6, opacity:1, scale:1 })


// gsap.set("#step-1-square", { x: 200, y: 0 , opacity:0, scale:0.2})
// gsap.set("#step-2-square", { x: -200, y: 0, opacity:0, scale:0.2 })
// gsap.set("#step-3-square", { x: 200, y: 0, opacity:0, scale:0.2 })
// gsap.set("#step-4-square", { x:-200, y: 0, opacity:0, scale:0.2 })


// let tl = gsap.timeline({
//   scrollTrigger: {
//       trigger: ".part_8 " + " .part_9 ",
//       start: "top top",
//       pin: true,
//       scrub: true,
//       end : "bottom bottom+=1500" ,
//       markers: true,
//   }
// });
// tl.to("#step-1-square", { x: 0, duration: 6, opacity:1, scale:1})
// .to("#step-2-square", { x: 0, duration: 6, opacity:1, scale:1 })
// .to("#step-3-square", { x: 0, duration: 6, opacity:1, scale:1 })
// .to("#step-4-square", { x: 0, duration: 6, opacity:1, scale:1 })