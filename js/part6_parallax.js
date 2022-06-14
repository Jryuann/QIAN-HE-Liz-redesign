
let part6_wrap = document.querySelector('.part_6');
let part6_request = null;


part6_wrap.addEventListener('mousemove', function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  cancelAnimationFrame(part6_request);
  part6_request = requestAnimationFrame(p6_update);
});

function p6_update() {
  dx = mouse.x - cx;
  dy = mouse.y - cy;
  let tiltx = (dy / cy);
  let tilty = - (dx / cx);



  gsap.to(".part_6-chestnut ", -5, { x: -tilty*10 , y: -tiltx });
  //   gsap.to(".circle-behind liz", 2, {x:tiltx*-25, y:tilty*-15, rotation:360});
  //   gsap.to(".circle-behind bg", 2, {x:-tilty*20, y:-tiltx*20, rotation:360});

}


window.addEventListener('resize', function (event) {
  window.innerWidth / 2;
  window.innerHeight / 2;
});