var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var radius = 100;

function drawSphere() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the sphere
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI*2);
  ctx.fillStyle = '#f00';
  ctx.fill();
  
  // Rotate the canvas
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(Math.PI/180);
  ctx.translate(-canvas.width/2, -canvas.height/2);
  
  // Schedule the next frame
  requestAnimationFrame(drawSphere);
}

// Start the animation
requestAnimationFrame(drawSphere);
