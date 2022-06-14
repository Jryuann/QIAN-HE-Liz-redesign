gsap.set("#card1", { x: - window.innerWidth * -2, y: 0 })
gsap.set("#card2", { x: - window.innerWidth * -3, y: 0 })
gsap.set("#card3", { x: - window.innerWidth * -4, y: 0 })

let part4_arr = gsap.utils.toArray(".wrapper")


ScrollTrigger.matchMedia({
  "(min-width: 1200px)": () => {
    part4_arr.forEach((e4) => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: e4,
          start: "top+=2000 top",
          pin: true,
          scrub: true,
          end: "bottom bottom",
          marker: true,

          duration: 10,
          delay: 6 ,
        }
      });
      tl2.to("#card1", { x: 0, duration: 2 })
        .to("#card2", { x: 0, delay : 8 ,duration: 8 } , "+=5")
        .to("#card3", { x: 0, delay : 24 , duration: 16 } , "+=5")
    });

  },

  "(min-width: 300px)": () => {
    part4_arr.forEach((e4) => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: e4,
          start: "top+=1900 center",
          pin: true,
          scrub: true,
          end: "bottom-=2200 center",
  
        }
      });
      tl2.to("#card1", { x: 0, duration: 1.2 })
        .to("#card2", { x: 0, delay : 8, duration:8 })
        .to("#card3", { x: 0,delay : 24, duration: 16 })
    });

  },
 
})

