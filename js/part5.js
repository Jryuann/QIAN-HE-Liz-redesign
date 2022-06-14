// gsap.registerPlugin(ScrollTrigger);

// const lists = document.querySelectorAll(".part_5");

// lists.forEach(list => {
//   const listTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: list,
//       start: "top-5% top",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse",
//       markers: true
//     }
//   })

//   // Animate the content items
//   const contents = list.querySelectorAll(".product_content");
//   listTimeline.from(contents, {
//     duration: 1,
//     y: 40,
//     opacity: 0,
//     stagger: .25,
//   }, 0)
  
// //   Animate the ps in the items
//   contents.forEach((content, i) => {
//     listTimeline.from(content.querySelectorAll(".product_pic img"), {
//       duration: 1,
//       y: 100,
//       opacity: 0,
//       stagger: .25
//     }, i * .25);
//   });
// });


gsap.registerPlugin(ScrollTrigger);

const lists = document.querySelectorAll(".product_list");

lists.forEach(list => {
  const listTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: list,
      start: "top top",
      end: "bottom bottom",
      toggleActions: "reverse play reverse play",
      markers: true
    }
  })

  // Animate the content items
  const contents = list.querySelectorAll(".info");
  listTimeline.from(contents, {
    duration: 1,
    y: -40,
    opacity: 0,
    stagger: .25,
  }, 0)
  
  // Animate the ps in the items
//   items.forEach((item, i) => {
//     blockTimeline.from(item.querySelectorAll(".card-area-text"), {
//       duration: 1,
//       y: 30,
//       opacity: 0,
//       stagger: .25
//     }, i * .25);
//   });
});