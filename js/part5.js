


gsap.registerPlugin(ScrollTrigger);

const lists = document.querySelectorAll(".product_list");

lists.forEach(list => {
  const listTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: list,
      start: "top top",
      end: "bottom bottom",
      toggleActions: "reverse play reverse play",
      // markers: true
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
  

});