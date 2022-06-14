
gsap.set("#card1", { x: - window.innerWidth * -2, y: 0 })
gsap.set("#card2", { x: - window.innerWidth * -2, y: 0 })
gsap.set("#card3", { x: - window.innerWidth * -2, y: 0 })

ScrollTrigger.matchMedia({
  "(min-width: 600px)": () => {
    gsap.registerPlugin(ScrollTrigger);
    let part3_t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part_4",
        start: 2800,
        end: "bottom-=100 bottom",
        scrub: true,
        // markers: true,

        duration: 5,
      },
    })
    part3_t1.to("#card1", { x: 0 })
    part3_t1.to("#card2", { x: 0, delay: 2 })
    part3_t1.to("#card3", { x: 0, delay: 2 })
  },
  "(min-width: 100px)": () => {
    gsap.registerPlugin(ScrollTrigger);
    let part3_t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part_4",
        start: "top-=800 top",
        end: "bottom-=100 bottom",
        scrub: true,
        // markers: true,

        duration: 5,
      },
    })
    part3_t1.to("#card1", { x: 0 })
    part3_t1.to("#card2", { x: 0, delay: 2 })
    part3_t1.to("#card3", { x: 0, delay: 2 })
  }
})





