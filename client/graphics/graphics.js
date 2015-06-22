var canvas, ctx, raf, running;

function initGraphics(){
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
raf;
running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ctx.fillRect(10,20,30,40);
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e){
  if (!running) {
    clear();
    ball.x = e.clientX - canvas.offsetLeft;
    ball.y = e.clientY - canvas.offsetTop;
    ball.draw();
  }
});

canvas.addEventListener("click",function(e){
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseouts",function(e){
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
}


Template.graphics.events({
	"click #start": function(event){initGraphics();},
	"click #stop": function(e){
  window.cancelAnimationFrame(raf);
  running = false;
}
})