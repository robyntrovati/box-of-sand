import p5 from 'p5';
import { Oscillator } from '../actors/oscillator';


function sketch(p) {
  const oscillators = [];

  p.setup = function() {
    p.createCanvas(600, 300);

    for (let i = 0; i < 10; i++) {
      const velocity = p.createVector(p.random(-0.05, 0.05), p.random(-0.05, 0.05));
      const amplitude = p.createVector(p.random(p.width / 2), p.random(p.height / 2));
      oscillators.push(new Oscillator(p, velocity, amplitude));
    }
  };

  p.draw = function() {
    p.background(255);

    oscillators.forEach((o) => {
      o.render();
    });
  };
}

new p5(sketch, 'sketch');
