import p5 from 'p5';
import { Mover } from '../actors/mover';
import { accelerationTowardsMouse } from '../utils';

function sketch(p) {
  const movers = [];
  let attractor;

  p.setup = function() {
    p.createCanvas(600, 300);

    const numMovers = 20;
    for (let i = 0; i < numMovers; i++) {
      const origin = p.createVector(p.random(p.width), p.random(p.height));
      movers.push(new Mover(p, p.random(0.1, 2), origin, 4));
    }
  };

  p.draw = function() {
    p.background(255);

    movers.forEach((m) => {
      const force = accelerationTowardsMouse(m);
      m.applyForce(force);
      m.update();
      m.render();
    });
  };
}

new p5(sketch, 'sketch');
