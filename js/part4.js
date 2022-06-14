gsap.set("#card1", { x: - window.innerWidth * -2, y: 0 })
gsap.set("#card2", { x: - window.innerWidth * -9, y: 0 })
gsap.set("#card3", { x: - window.innerWidth * -16, y: 0 })




ScrollTrigger.matchMedia({
  "(min-width: 1200px)": () => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
          trigger: ".part_4" + ".part_5",
          start: "top+=1900 top",
          pin: true,
          scrub: true,
          end: "bottom-=2600 center",

      }
  });
    tl2.to("#card1", { x: 0, duration: 2 })
    .to("#card2", { x: 0, duration: 2  })
    .to("#card3", { x: 0, duration: 2 })
  },
  "(min-width: 300px)": () => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
          trigger: ".part_4" + ".part_5",
          start: "top+=1900 top",
          pin: true,
          scrub: true,
          end: "bottom-=2200 center",

      }
  });
    tl2.to("#card1", { x: 0, duration: 1.2 })
    .to("#card2", { x: 0, duration: 2 })
    .to("#card3", { x: 0, duration: 2 })
  }

})






//     let tl3 = gsap.timeline({
//       scrollTrigger: {
//           trigger: ".part_5"+".part_4",
//           start: "center+100 center",
//           pin: true,
//           scrub: true,
//           end: "bottom bottom",
//           markers: true,

        
//       }
//   });
//     tl3.to(".info", { opacity:  1 , scale : 1 , display:"block" , duration: 0.01})
 






// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.matchMedia({
//   "(min-width: 1200px)": () => {
//     //跟設定css 一樣  如果畫面不小於 768px 執行
//     gsap.to(".brandInsist_card", {
//       x: 0,
//       duration: 5,
//       scrollTrigger: {
//         trigger: ".part_4", //觸發得物件
//         start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
//         end: "bottom bottom ", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
//         pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
//         scrub: 0, // 物件動畫根據卷軸捲動程度跑
//         markers: true // 顯示標記
//       }
//     });
//   } ,
//   "(max-width: 1200px)": () => {
//     //跟設定css 一樣  如果畫面不小於 768px 執行
//     gsap.to(".brandInsist_card", {
//       x: 0,
//       duration: 5,
//       scrollTrigger: {
//         trigger: ".part_4", //觸發得物件
//         start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
//         end: "bottom bottom+=1200", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
//         pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
//         scrub: true, // 物件動畫根據卷軸捲動程度跑
//         markers: true // 顯示標記
//       }
//     });
//   }
// });
