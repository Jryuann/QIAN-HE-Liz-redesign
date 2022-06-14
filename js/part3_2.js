let arr = gsap.utils.toArray(".wrapper")

gsap.set(".back", { scale: 0.2 })




ScrollTrigger.matchMedia({
  "(min-width: 1200px)": () => {

    arr.forEach((e) => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: e,
          scrub: 0,
          end: '+=4000',
          start: "top-=1000 top",
          // markers: true // 顯示標記
        }
      })
      tl.to(e.children[0], {
        scale: 1.2,
        display : "block"
      })
    
      tl.to(e.children[0], {
        scale: 0.2,
    
      })
    })


  },

  "(min-width: 200px)": () => {

    arr.forEach((e) => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: e,
          scrub: 0,
          end: 'bottom top',
          start: "top-=1000 top",
          // markers: true // 顯示標記
        }
      })
      tl.to(e.children[0], {
        scale: 1,
        display : "block"
      })
    
      tl.to(e.children[0], {
        scale: 0.1,
    
      })
    })


  },
  
})


