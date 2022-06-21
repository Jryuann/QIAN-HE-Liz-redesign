



// 文字方塊
gsap.set("#step-1-square", { x: 200, y: 0, opacity: 0, scale: 0.2 })
gsap.set("#step-2-square", { x: -200, y: 0, opacity: 0, scale: 0.2 })
gsap.set("#step-3-square", { x: 200, y: 0, opacity: 0, scale: 0.2 })
gsap.set("#step-4-square", { x: -200, y: 0, opacity: 0, scale: 0.2 })
// line 
gsap.set(".join-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })
gsap.set(".contract-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })
gsap.set(".tec-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })



gsap.registerPlugin(ScrollTrigger);
let part_8_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part_8",
    
    start: "top center-=50",
    end: "bottom bottom",
    scrub: true,
    // markers: true,

    duration: 5,
  },
});

part_8_tl.to("#step-1-square", { x: 0, duration: 20, opacity: 1, scale: 1 })
  // line
  .to(".join-step-line", { y: 0, duration: 20, opacity: 1, scale: 1  })

  .to("#step-2-square", { x: 0, duration: 20, opacity: 1, scale: 1 , delay:2 })
  // line
  .to(".contract-step-line", { y: 0, duration: 20, opacity: 1, scale: 1 })

  .to("#step-3-square", { x: 0, duration: 20, opacity: 1, scale: 1, delay:2 })
  // line
  .to(".tec-step-line", { y: 0, duration: 20, opacity: 1, scale: 1 })

  .to("#step-4-square", { x: 0, duration: 100, opacity: 1, scale: 1, delay:2 })

// 930px
gsap.registerPlugin(ScrollTrigger);

const squares = document.querySelectorAll(".part_8");

squares.forEach(square => {
  const squareTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: square,
      start: "top+=100 center",
      end: "bottom+=150 center",
      toggleActions: "play reverse play reverse",
      // markers: true


    }
  })

  // Animate the content items
  const squ = square.querySelectorAll(".squ");
  squareTimeline.from(squ, {
    duration: 0.1,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    delay: 0,
  }, 0)

});
