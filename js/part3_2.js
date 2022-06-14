let arr = gsap.utils.toArray(".wrapper")

gsap.set(".back", { scale: 0.2 })


arr.forEach((e) => {
  console.log(e.children[0])
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: e,
      scrub: 0,
      end: '+=3400',
      start: "top-=1200 top",
      markers: true // 顯示標記
    }
  })
  tl.to(e.children[0], {
    scale: 1,
    display : "block",
  })

  tl.to(e.children[0], {
    scale: 0.4,

  })
})



