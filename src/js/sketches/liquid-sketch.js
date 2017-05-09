import p5 from 'p5';
import { Mover } from '../actors/mover';
import { Liquid } from '../environments/liquid';
import { getGravity } from '../forces/forces';


function sketch(p) {
  let movers = [];
  const numMovers = 10;
  let liquid;

  p.setup = function() {
    p.createCanvas(600, 300);
    liquid = new Liquid(p, 0, p.height / 2, p.width, p.height / 2, 0.1);

    for (let i = 0; i < numMovers; i++) {
      const mass = p.random(0.1, 4);
      const origin = p.createVector(p.random(60, 560), 0);
      movers.push(new Mover(p, mass, origin));
    }
  };

  p.draw = function() {
    p.background(255);
    liquid.display();

    movers.forEach((m) => {
      const gravity = getGravity(1, m.mass, 10, 10);
      const gVector = p.createVector(0, gravity);
      m.applyForce(gVector, m.mass);

      if (liquid.contains(m)) {
        const drag = liquid.drag(m);
        m.applyForce(drag);
      }

      if (!isAtBottom(m)) {
        m.update();
      }

      m.render();
    });
  };

  const isAtBottom = function(m) {
    return m.position.y >= p.height - ((m.mass * 10) / 2);
  };
}

new p5(sketch, 'sketch');
