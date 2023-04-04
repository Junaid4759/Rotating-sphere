var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var radius = 100;
var angle = 0;

function drawSphere() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sphere
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI*2);
  ctx.fillStyle = '#f00';
  ctx.fill();

  // Rotate the canvas
  angle += 0.01;
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(angle);
  ctx.translate(-canvas.width/2, -canvas.height/2);

  // Schedule the next frame
  requestAnimationFrame(drawSphere);
}

// Resize the canvas to fit the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Start the animation
resizeCanvas();
requestAnimationFrame(drawSphere);

// Resize the canvas when the window size changes
window.addEventListener('resize', function() {
  resizeCanvas();
});
