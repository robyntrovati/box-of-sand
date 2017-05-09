import p5 from 'p5';
import { Mover } from '../actors/mover';
import { Attractor } from '../actors/attractor';


function sketch(p) {
  let mover, attractor;

  p.setup = function() {
    p.createCanvas(600, 300);

    const mOrigin = p.createVector(400, 50);
    mover = new Mover(p, 1, mOrigin);

    const aOrigin = p.createVector(p.width / 2, p.height / 2);
    attractor = new Attractor(p, aOrigin, 20, 1);
  };

  p.draw = function() {
    p.background(255);

    var force = attractor.getForce(mover);
    mover.applyForce(force);
    mover.update();

    attractor.render();
    mover.render();
  };

  p.mousePressed = function() {
    attractor.handlePress(p.mouseX, p.mouseY);
  };

  p.mouseDragged = function() {
    attractor.handleDrag(p.mouseX, p.mouseY);
  };

  p.mouseReleased = function() {
    attractor.handleStopDrag();
  };
}

new p5(sketch, 'sketch');
