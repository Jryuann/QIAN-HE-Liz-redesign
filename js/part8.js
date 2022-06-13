gsap.registerPlugin(ScrollTrigger);

gsap.to("#step-1-square", {
  x: 100,
  duration: 2,
  scrollTrigger: {
    trigger: ".part_8", //觸發得物件
    start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
    end: "bottom bottom ", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
    pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
    scrub: 0.3, // 物件動畫根據卷軸捲動程度跑
    markers: true // 顯示標記
  }
});