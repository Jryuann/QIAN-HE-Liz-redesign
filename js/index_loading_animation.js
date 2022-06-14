
document.addEventListener("DOMContentLoaded", function (event) {



    gsap.to(".index_start", {
        rotation: 400,
        // opacity: 1,
        scale: 10,
        x: 0,
        y: -1000,
        duration: 3,
        ease:Power0.easeNone,
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
        gsap.to("body", {
            style: "overflow: scroll; overflow-x: hidden;"
        });
    }, 4000);

    gsap.to("#container .liz_dec", {
        rotation: 360,
        opacity: 1,
        scale: 1,
        // x: 0,
        // y: 0,
        duration: 1.5,
        delay: 1.5,
        // top: -10,
        // left: -10   

        ease:Power0.easeNone,
        // stagger: {
        //     each: 0.3,
        //     from: "end",
        // },
    });

    gsap.to("#container .inner", {
        rotation: 360,
        opacity: 1,
        scale: 1,

        duration: 1.5,
        delay: 2,
    });
    gsap.to(".load_animate", {
        rotation: 360,
        opacity: 1,
        scale: 1,

        duration: 1.5,
        delay: 2,

        stagger: {
            each: 0.1,
            from: "end",
        },

    });

    gsap.to(".load_animate_opacity", {
        opacity: 1,
        duration: 1,
        delay: 2.5 ,
    });



});
var burger =  document.querySelector('#burger')

document.querySelectorAll("nav li").forEach((btn, index) => {
    
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:".part_" + (index + 1), offsetY:0}});
      burger.checked = false;
    });
  });

const main_liz = document.querySelector(".main_liz")

main_liz.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: "#part_2"})
})
  