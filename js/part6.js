// gsap.set(" #card-area-square1 ", { x: 0, y: 0, opacity: 0, scale: 0.1, })
// gsap.set(" #card-area-square2 ", { x: 0, y: 0, opacity: 0, scale: 0.1, })
// gsap.set(" #card-area-square3 ", { x: 0, y: 0, opacity: 0, scale: 0.1, })
// gsap.set(" #card-area-square4 ", { x: 0, y: 0, opacity: 0, scale: 0.1, })

// gsap.set(" .sq ", { x: 0, y: 0, opacity: 0, scale: 0.1, })
// gsap.set(" .card-area-text ", { x: 0, y: 500, opacity: 0 })
gsap.registerPlugin(ScrollTrigger);

// const blocks = document.querySelectorAll(".card-area");

// blocks.forEach(block => {
//   const blockTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: block,
//       start: "top-50% top",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse",
//       markers: true
//     }
//   })

//   // Animate the content items
//   const items = block.querySelectorAll(".sq");
//   blockTimeline.from(items, {
//     duration: 1,
//     x: 40,
//     opacity: 0,
//     stagger: .25,
//   }, 0)
  
//   // Animate the ps in the items
//   items.forEach((item, i) => {
//     blockTimeline.from(item.querySelectorAll(".card-area-text"), {
//       duration: 1,
//       y: 30,
//       opacity: 0,
//       stagger: .25
//     }, i * .25);
//   });
// });


gsap.set(".sq", { x: 40 , opacity : 0 })
gsap.set(".card-area-text", {y : 40 , opacity : 0 })

gsap.registerPlugin(ScrollTrigger);
let part6_t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part_6",
    start: 6500,
    end: "bottom-=200 bottom",
    scrub: true,
    markers: true,

    duration: 5,
  },
});

part6_t1.to(".card-area", {x: 0})
part6_t1.to(".sq", {x : 0 , y : 0 , opacity : 1 , duration : 1 , delay : 0.1 })
part6_t1.to(".card-area-text", { y : 0 , opacity: 1 , duration : 1})

    // text
    // gsap.set(" #card-area-text1 ", { x: 0, y: 500, opacity: 0 })
    // gsap.set(" #card-area-text2 ", { x: 0, y: 500, opacity: 0 })
    // gsap.set(" #card-area-text3 ", { x: 0, y: 500, opacity: 0 })
    // gsap.set(" #card-area-text4 ", { x: 0, y: 500, opacity: 0 })

    // ScrollTrigger.matchMedia({
    //     "(max-width: 1920px)": () => {
    //         let tl2 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".part_6 " + ".part_7",
    //                 start: "top top",
    //                 pin: true,
    //                 scrub: true,
    //                 end: "100%-=4200px bottom",
    //                 markers: true,
    //             }
    //         });

            // tl2.to(" #card-area-square1", { x: 0, duration: 50, opacity: 1, scale: 1, })
            //     .to(" #card-area-text1", { y: 0, duration: 50, opacity: 1, })

            //     .to(" #card-area-square2", { x: 0, duration: 50, opacity: 1, scale: 1, })
            //     .to(" #card-area-text2", { y: 0, duration: 50, opacity: 1, })

            //     .to(" #card-area-square3", { x: 0, duration: 50, opacity: 1, scale: 1, })
            //     .to(" #card-area-text3", { y: 0, duration: 50, opacity: 1, })

            //     .to(" #card-area-square4", { x: 0, duration: 50, opacity: 1, scale: 1, })
            //     .to(" #card-area-text4", { y: 0, duration: 50, opacity: 1, })

        //     tl2.to(" .sq ", { x: 0, duration: 50, opacity: 1, scale: 1 })
        //         .to(" .card-area-text", { y: 0, duration: 50, opacity: 1 })

        // },

    //     "(max-width: 930px)": () => {
    //         let tl2 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".part_6" + ".part_7",
    //                 start: "top top",
    //                 pin: true,
    //                 scrub: true,
    //                 end: "100%-=3500px bottom",
    //                 markers: true,
    //             }
    //         });
    //         tl2.to(" #card-area-square1", { x: 0, duration: 50, opacity: 1, scale: 1, })
    //             .to(" #card-area-text1", { y: 0, duration: 50, opacity: 1, })

    //             .to(" #card-area-square2", { x: 0, duration: 50, opacity: 1, scale: 1, })
    //             .to(" #card-area-text2", { y: 0, duration: 50, opacity: 1, })

    //             .to(" #card-area-square3", { x: 0, duration: 50, opacity: 1, scale: 1, })
    //             .to(" #card-area-text3", { y: 0, duration: 50, opacity: 1, })

    //             .to(" #card-area-square4", { x: 0, duration: 50, opacity: 1, scale: 1, })
    //             .to(" #card-area-text4", { y: 0, duration: 50, opacity: 1, })
    //     }
    // })