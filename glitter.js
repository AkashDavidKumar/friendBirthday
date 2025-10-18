const canvas = document.getElementById('glitterCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const colors = [
  "#fff", "#ffe066", "#ff4081", "#00e6e6", "#b388ff", "#ffb347", "#ff6961", "#7afcff", "#e0ffb3", "#ffb3e6"
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createGlitter() {
  return {
    x: randomBetween(0, canvas.width),
    y: randomBetween(0, canvas.height),
    r: randomBetween(0.8, 2.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: randomBetween(0.5, 1),
    dx: randomBetween(-0.2, 0.2),
    dy: randomBetween(-0.1, 0.3),
    twinkle: Math.random() > 0.5
  };
}

const glitters = [];
const GLITTER_COUNT = 180; // increased for more glitters

for (let i = 0; i < GLITTER_COUNT; i++) {
  glitters.push(createGlitter());
}

function drawGlitters() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let g of glitters) {
    ctx.save();
    ctx.globalAlpha = g.alpha;
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
    ctx.fillStyle = g.color;
    ctx.shadowColor = g.color;
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    // Animate
    g.x += g.dx;
    g.y += g.dy;
    if (g.twinkle) {
      g.alpha += Math.sin(Date.now() / 250 + g.x) * 0.01;
      g.alpha = Math.max(0.3, Math.min(1, g.alpha));
    }

    // Respawn if out of bounds
    if (g.x < 0 || g.x > canvas.width || g.y < 0 || g.y > canvas.height) {
      Object.assign(g, createGlitter());
      if (Math.random() > 0.5) g.y = 0; // respawn from top sometimes
      else g.x = randomBetween(0, canvas.width);
    }
  }
  requestAnimationFrame(drawGlitters);
}

drawGlitters();
