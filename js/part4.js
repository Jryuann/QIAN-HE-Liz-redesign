gsap.set(".brandInsist_card", { x: - window.innerWidth * -2 })

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part_4",
        pin: true,
        scrub: true,
        end: "+=2500",
    }
});

tl.to(".card1", { x: 0, duration: 3 })
    .to(".card2", { x: 0, duration: 3 , z: 180 })
    .to(".card3", { x: 0, duration: 3 })