import p5 from 'p5';
import { Walker } from '../actors/walker';
import {
  equalProbCardinal,
  equalProbAllDirs,
  gaussian,
  monteCarlo,
  perlin,
} from '../forces/randomness-generators';



function sketch(...configs) {
  return (p) => {
    let walkers = [];

    function createWalker(config) {
      const x = (p.width / 2) + config.size;
      const y = (p.height / 2) + config.size;
      const props = { p, x, y, ...config };
      walkers.push(new Walker(props));
    }

    p.setup = function() {
      p.createCanvas(600, 300);
      configs.forEach((config) => createWalker(config));
    };

    p.draw = function() {
      walkers.forEach((w) => w.render());
    };
  };
}

const s1Config = {
  color: 'rgb(219, 23, 80)',
  size: 3,
  randomGen: (s) => equalProbCardinal(s),
};

const s2Config = {
  color: 'rgb(23, 80, 219)',
  size: 3,
  randomGen: (s) => equalProbAllDirs(s),
};

const s3Config = {
  color: 'rgb(36, 232, 175)',
  size: 3,
  randomGen: (s) => gaussian(s, 30),
};

const s4Config = {
  color: 'rgb(219, 162, 23)',
  size: 3,
  randomGen: (s) => monteCarlo(s, 20),
};

const s5Config = {
  frameRate: 30,
  color: 'rgb(0, 0, 0)',
  size: 1,
  randomGen: perlin,
  xoff: 0,
  yoff: 1000,
};

new p5(sketch(s1Config, s2Config), 'sketch');
// new p5(sketch(s3Config, s4Config), 'sketch');
// new p5(sketch(s5Config), 'sketch');
