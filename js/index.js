let wrap = document.getElementById('part_index');
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

TweenMax.to("#container dec", 1, {x:-tilty*20, y:-tiltx*20, rotation:0.01, ease:Power2.easeOut});
TweenMax.to("#container liz", 1, {x:tilty*20, y:tiltx*20, rotation:0.01, ease:Power2.easeOut});
}


window.addEventListener('resize', function(event){
 window.innerWidth / 2;
   window.innerHeight / 2;
});