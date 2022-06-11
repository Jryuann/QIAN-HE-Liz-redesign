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
