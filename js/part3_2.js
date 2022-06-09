gsap.timeline({

    scrollTrigger: {
        trigger: 'section',
        pin: true,
        start: 'center bottom',
        end: '+=3250', // = 'total time'
        scrub: true,
        scale: 0,
        y: "-=2000",
    }
})

    .to('.o', {
        //scale:100, // to do: calc of value in relation to window.innerWidth / .innerHeigt
        scale: 100,
        duration: 1.2, ease: 'none',
        stagger: 0.1, // 

    })


    .to('.o', {
        //scale:100, // to do: calc of value in relation to window.innerWidth / .innerHeigt
        scale: 1,
        duration: 0.3, ease: 'none',
        stagger: 0.1, // 
        y: "-=2000",
    })

