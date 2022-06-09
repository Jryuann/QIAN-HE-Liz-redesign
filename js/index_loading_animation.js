document.addEventListener("DOMContentLoaded", function (event) {


    gsap.to(".index_start", {
        rotation: 400,
        // opacity: 1,
        scale: 10,
        x: 0,
        y: -1000,
        duration: 3,
        // ease: "back",
        // stagger: {
        //     each: 0.3,
        //     from: "end",
        // },

    });

    setInterval(function () {
        gsap.to(".index_start", {

            
            style: "display:none;"

        });
    }, 4000);

    gsap.to("#container liz", {
        rotation: 360,
        // opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        delay: 1,

        // ease: "back",
        // stagger: {
        //     each: 0.3,
        //     from: "end",
        // },
    });




});