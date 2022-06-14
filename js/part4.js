gsap.set("#card1", { x: - window.innerWidth * -2, y: 0 })
gsap.set("#card2", { x: - window.innerWidth * -9, y: 0 })
gsap.set("#card3", { x: - window.innerWidth * -16, y: 0 })




ScrollTrigger.matchMedia({
  "(min-width: 1200px)": () => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part_4" + ".part_5",
        start: "top+=1900 top",
        pin: true,
        scrub: true,
        end: "bottom-=2600 center",

      }
    });
    tl2.to("#card1", { x: 0, duration: 2 })
      .to("#card2", { x: 0, duration: 2 })
      .to("#card3", { x: 0, duration: 2 })
  },
  "(min-width: 300px)": () => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part_4" + ".part_5",
        start: "top+=1900 top",
        pin: true,
        scrub: true,
        end: "bottom-=2200 center",

      }
    });
    tl2.to("#card1", { x: 0, duration: 1.2 })
      .to("#card2", { x: 0, duration: 2 })
      .to("#card3", { x: 0, duration: 2 })
  }

})
