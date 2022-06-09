        // let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".wrapper",
//     scrub:0.1,
//     start: "top center"
//   }
// })

let arr = gsap.utils.toArray(".wrapper")

arr.forEach((e) => {
  console.log(e.children[0])
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: e,
      scrub:0,
      end: '+=3800',
      start: "top bottom"
    }
  })
  
    tl.to(e.children[0], {
    scale: 12,

    })

    tl.to(e.children[0], {
      scale: 2,

    })
})
// tl.to("#back", {
//   scale: 10,

// })

// tl.to("#back", {
//   scale: 2,
  
// })