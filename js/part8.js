// 文字方塊
// gsap.set("#step-1-square", { x: 200, y: 0, opacity: 0, scale: 0.2 })
// gsap.set("#step-2-square", { x: -200, y: 0, opacity: 0, scale: 0.2 })
// gsap.set("#step-3-square", { x: 200, y: 0, opacity: 0, scale: 0.2 })
// gsap.set("#step-4-square", { x: -200, y: 0, opacity: 0, scale: 0.2 })
// // line 
// gsap.set(".join-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })
// gsap.set(".contract-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })
// gsap.set(".tec-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })

// 930px
// gsap.set("#square-group-1", { x: 0, y: -100, opacity: 0.1, scale: 0.1 })
// gsap.set("#square-group-2", { x: 0, y: -100, opacity: 0.1, scale: 0.1 })
// gsap.set("#square-group-3", { x: 0, y: -100, opacity: 0.1, scale: 0.1 })
// gsap.set("#square-group-4", { x: 0, y: -100, opacity: 0.1, scale: 0.1 })


// ScrollTrigger.matchMedia({
//   "(max-width: 1920px)": () => {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".part_8 " + ".part_9",
//         start: "+=2200px top",
//         pin: true,
//         scrub: true,
//         end: "100%-=1500px bottom",
//         markers: true,
//       }
//     });
//     tl.to("#step-1-square", { x: 0, duration: 50, opacity: 1, scale: 1 })
//       // line
//       .to(".join-step-line", { y: 0, duration: 50, opacity: 1, scale: 1 })

//       .to("#step-2-square", { x: 0, duration: 50, opacity: 1, scale: 1 })
//       // line
//       .to(".contract-step-line", { y: 0, duration: 50, opacity: 1, scale: 1 })

//       .to("#step-3-square", { x: 0, duration: 50, opacity: 1, scale: 1 })
//       // line
//       .to(".tec-step-line", { y: 0, duration: 50, opacity: 1, scale: 1 })

//       .to("#step-4-square", { x: 0, duration: 50, opacity: 1, scale: 1 })
//   }

// "(max-width: 930px)": () => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".part_8" + ".part_9" ,
//         start: "+=2200px top",
//         pin: true,
//         scrub: true,
//         end: "100%-=1500px bottom",
//         markers: true,
//     }
// });

// tl.to("#square-group-1", { y: 0, duration: 100, opacity: 1, scale: 1 })
//     // line
//     .to("#square-group-2", { y: 0, duration: 100, opacity: 1, scale: 1 })

//     .to("#square-group-3", { y: 0, duration: 100, opacity: 1, scale: 1 })
//     // line
//     .to("#square-group-4", { y: 0, duration: 100, opacity: 1, scale: 1 })
//   }
// })




// 文字方塊
gsap.set("#step-1-square", { x: 200, y: 0, opacity: 0, scale: 0.2 })
gsap.set("#step-2-square", { x: -200, y: 0, opacity: 0, scale: 0.2 })
gsap.set("#step-3-square", { x: 200, y: 0, opacity: 0, scale: 0.2 })
gsap.set("#step-4-square", { x: -200, y: 0, opacity: 0, scale: 0.2 })
// line 
gsap.set(".join-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })
gsap.set(".contract-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })
gsap.set(".tec-step-line", { x: 0, y: -100, opacity: 0, scale: 0.1 })


// let part_8_tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".part_8 ",
//     start: "top top",
//     pin: true,
//     scrub: true,
//     end: "bottom-200px bottom",
//     markers: true,
//   }
// });
// part_8_tl.to("#step-1-square", { x: 0, duration: 20, opacity: 1, scale: 1 })
//   // line
//   .to(".join-step-line", { y: 0, duration: 20, opacity: 1, scale: 1 })

//   .to("#step-2-square", { x: 0, duration: 20, opacity: 1, scale: 1 })
//   // line
//   .to(".contract-step-line", { y: 0, duration: 20, opacity: 1, scale: 1 })

//   .to("#step-3-square", { x: 0, duration: 20, opacity: 1, scale: 1 })
//   // line
//   .to(".tec-step-line", { y: 0, duration: 20, opacity: 1, scale: 1 })

//   .to("#step-4-square", { x: 0, duration: 100, opacity: 1, scale: 1 })



gsap.registerPlugin(ScrollTrigger);
let part_8_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part_8",
    start: 9000,
    end: "bottom bottom",
    scrub: true,
    markers: true,

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
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      markers: true
    }
  })

  // Animate the content items
  const squ = square.querySelectorAll(".squ");
  squareTimeline.from(squ, {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
  }, 0)

});


// 1920px
// gsap.registerPlugin(ScrollTrigger);

// const steps = document.querySelectorAll(".part_8");

// steps.forEach(step => {
//   const stepTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: step,
//       start: "top top",
//       end: "bottom bottom",
//       toggleActions: "reverse play reverse play reverse",
//       markers: true
//     }
//   })

//   // Animate the content items
//   const squ = square.querySelectorAll(".squ");
//   squareTimeline.from(squ, {
//     duration: 1,
//     y: 100,
//     opacity: 0,
//     stagger: 0.3,
//   }, 0)

// });