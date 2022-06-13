window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

let wrap = document.querySelector('.part_index');
let request = null;
let mouse = { x: 0, y: 0 };
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;

document.querySelector('.part_index').addEventListener('mousemove', function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
cancelAnimationFrame(request);
request = requestAnimationFrame(update);
});

function update() {
    dx = mouse.x - cx;
    dy = mouse.y - cy;
    let tiltx = (dy / cy );
    let tilty = - (dx / cx);



  gsap.to("#container dec", 2, {x:-tilty*20, y:-tiltx*20  , rotation:360});
  gsap.to("#container liz", 2, {x:tiltx*-25, y:tilty*-15, rotation:360});
  gsap.to("#container bg", 2, {x:-tilty*20, y:-tiltx*20, rotation:360});

}


window.addEventListener('resize', function(event){
 window.innerWidth / 2;
   window.innerHeight / 2;
});
// 下面新作法 
// function touches(e){
// 	var x = e.touches ? e.touches[0].clientX : e.clientX, 
// 			y = e.touches ? e.touches[0].clientY : e.clientY;
//   var w = window.innerWidth / 2;
//   var h = window.innerHeight / 2;
  
//   var l = -(x - w) / (w / 10) - 10;
//   var t = -(y - h) / (h / 10) - 10;
//       //10 / (y - (h / 2)) * 100;             
//   console.log(y + ' | ' + h + ' | ' + t);
  
// 	TweenMax.to($('.decs'),0.1, {
// 		top: t/2 + "%",
// 		left: l/2 + "%"
// 	});

//     TweenMax.to($('.liz_dec'), 3, {
// 		top: -t + "%",
// 		left: -l + "%"
// 	});
//     TweenMax.to($('.bg'), 3, {
// 		top: t + "%",
// 		left: l + "%"
// 	});
	
// }

// window.addEventListener("mousemove", touches);
// window.addEventListener("touchstart", touches);
// window.addEventListener("touchmove", touches);