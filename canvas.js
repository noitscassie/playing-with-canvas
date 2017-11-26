var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangles

// c.fillStyle = "blue";
// c.fillRect(200, 200, 400, -100);


// Lines
// c.beginPath();
// c.moveTo(300, 600);
// c.lineTo(400, 100);
// c.strokeStyle = "rgba(255, 0, 0, 1)";
// c.stroke();


// Arcs

// for (var i = 0; i < 300; i++) {
//   var x = Math.random() * canvas.width;
//   var y = Math.random() * canvas.height;
//   var red = Math.floor(Math.random() * 255);
//   var green = Math.floor(Math.random() * 255);
//   var blue = Math.floor(Math.random() * 255);
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = "rgba(" + red + ", " + green + ", " + blue + ", 1)";
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius, red, green, blue) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.red = red;
  this.green = green;
  this.blue = blue;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1)";
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

};

var circleArray = []

for (var i = 0; i < 100; i++) {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  var radius = 50;
  circleArray.push(new Circle(x, y, dx, dy, radius, red, green, blue));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate();
