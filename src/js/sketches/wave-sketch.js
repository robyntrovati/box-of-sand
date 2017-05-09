import p5 from 'p5';


function sketch(p) {
  let startAngle = 0;
  const aVelocity = 0.2;

  p.setup = function() {
    p.createCanvas(600, 300);
  };

  p.draw = function() {
    p.background(255);

    startAngle += 0.015;
    let angle = startAngle;

    for (let x = 0; x <= p.width; x += 24) {
      const y = p.map(p.sin(angle), -1, 1, 0, p.height);
      p.stroke(0);
      p.fill(255, 50);
      p.strokeWeight(1);
      p.ellipse(x, y, 24, 24);
      angle += aVelocity;
    }
  };
}

new p5(sketch, 'sketch');
