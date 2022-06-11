gsap.set(".brandInsist_card", { x: - window.innerWidth * -2 })

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part_4",
        pin: true,
        scrub: true,
        end: "+=5000",
    }
});

tl2.to(".card1", { x: 0, duration: 2 })
    .to(".card2", { x: 0, duration: 2 })
    .to(".card3", { x: 0, duration: 2 })