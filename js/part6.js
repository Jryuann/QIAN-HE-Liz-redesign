
// gsap.registerPlugin(ScrollTrigger);


// gsap.set(".sq", { x: 40 , opacity : 0 })
// gsap.set(".card-area-text", {y : 40 , opacity : 0 })

// gsap.registerPlugin(ScrollTrigger);
// let part6_t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".part_6",
//     start: 6500,
//     end: "bottom-=500 bottom",
//     scrub: true,
//     markers: true,
//     duration: 5,
//   },
// });

// part6_t1.to(".card-area", {x: 0})
// part6_t1.to(".sq", {x : 0 , y : 0 , opacity : 1 , duration : 1 , delay : 0.1})
// part6_t1.to(".card-area-text", { y : 0 , opacity: 1 , duration : 1})


gsap.registerPlugin(ScrollTrigger);

const squares6 = document.querySelectorAll(".part_6");

squares6.forEach(square6 => {
  const squareTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: square6,
      start: "top-=-50 center",
      end: "bottom+=500 bottom",
      toggleActions: "play reverse play reverse",
      // markers: true
    }
  })

  // Animate the content items
  const sq = square6.querySelectorAll(".sq");
  squareTimeline.from(sq, {
    duration: 0.2,
    x: 40,
    opacity: 0,
    stagger: 0.2,
    delay: 0,
  }, 0)
  
  const cardAreaText = square6.querySelectorAll(".card-area-text");
  squareTimeline.from(cardAreaText, {
    duration: 0.2,
    y: 40,
    opacity: 0,
    stagger: 0.2,
    delay: 0,
  }, 0)

});
