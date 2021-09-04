var points = [];
var dt = 0.01;

var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noiseDetail(1);
  angleMode(DEGREES);
  var density = 50;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  dt = random(0.002, 0.01);

  shuffle(points, true);
}

function draw() {
  noStroke();

  for (var i = 0; i < height; i++) {
    var r = map(points[i].x, 0, width, r1, r2);
    var g = map(points[i].y, 0, height, g1, g2);
    var b = map(points[i].x, 0, width, b1, b2);
    //var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 1, 250, 255, 0);

    fill(r, g, b, alpha);
    fill(r, g, b);

    var angle = map(noise(points[i].x * dt, points[i].y * dt), 0, 1, 0, 720);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (dist(width / 2, height / 2, points[i].x, points[i].y) < 250) {
      ellipse(points[i].x, points[i].y, 1);
    }

    // ellipse(points[i].x, points[i].y, 1);
  }
}

function mousePressed() {
  window.location.reload();
}
