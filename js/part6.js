
gsap.registerPlugin(ScrollTrigger);


gsap.set(".sq", { x: 40 , opacity : 0 })
gsap.set(".card-area-text", {y : 40 , opacity : 0 })

gsap.registerPlugin(ScrollTrigger);
let part6_t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part_6",
    start: 6500,
    end: "bottom-=500 bottom",
    scrub: true,
    markers: true,
    duration: 5,
  },
});

part6_t1.to(".card-area", {x: 0})
part6_t1.to(".sq", {x : 0 , y : 0 , opacity : 1 , duration : 1 , delay : 0.1})
part6_t1.to(".card-area-text", { y : 0 , opacity: 1 , duration : 1})
