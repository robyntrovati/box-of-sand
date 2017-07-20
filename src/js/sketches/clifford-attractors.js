import p5 from 'p5';

import { clifford1, clifford2 } from './constants/clifford-constants.js';

function sketch(config) {
  return (p) => {
    let a = config.a;
    const b = config.b;
    const c = config.c;
    const d = config.d;
    const startA = config.a;
    const background = config.background;
    const increment = config.increment;

    let color = config.startColor;
    const updateColor = config.updateColor;

    let x = 0;
    let y = 0;
    let xNew;
    let yNew;

    const numPoints = 10000;
    const scale = 100;

    p.setup = function() {
      p.createCanvas(800, 800);
      p.background(background);
    };

    p.draw = function() {
      if (a === 0) a = startA;

      if (!color) return;

      for (let i = 0; i < numPoints; i++) {
        xNew = Math.sin(a * y) + c * Math.cos(a * x);
        yNew = Math.sin(b * x) + d * Math.cos(b * y);
        x = xNew;
        y = yNew;
        p.stroke(p.color(color));
        p.point((p.width / 2) + x * scale, (p.height / 2) + y * scale);
      }

      a += increment;
      color = updateColor();
    };
  };
}

new p5(sketch(clifford1), 'sketch');
