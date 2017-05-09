// Equal probability x and y will be shifted in one of the four cardinal directions
export function equalProbCardinal(s) {
  const r = Math.floor(s.p.random(4));
  const increment = s.size * 2;
  if (r === 0) s.x += increment;
  if (r === 1) s.x -= increment;
  if (r === 2) s.y += increment;
  if (r === 3) s.y -= increment;
}


// Equal probability x and y will be shifted in a cardinal direction, diagonal direction or stay in place
export function equalProbAllDirs(s) {
  let rX = Math.floor(s.p.random(-1, 2));
  let rY = Math.floor(s.p.random(-1, 2));

  function addSpeed(r) {
    if (r > 0) return s.size * 2;
    if (r < 0) return -s.size * 2;
    if (r === 0) return 0;
  }

  s.x += addSpeed(rX);
  s.y += addSpeed(rY);
}


// Increments x and y positions by a random Gaussian number where the position is the mean
export function gaussian(s, sd) {
  s.x = s.p.randomGaussian(s.p.width / 2, sd);
  s.y = s.p.randomGaussian(s.p.height / 2, sd);
}


// Utilizes the Monte Carlo method to increment x and y positions
export function monteCarlo(s, stepMax) {
  const stepSize = s.p.random(0, stepMax);
  const probability = stepSize;
  const qualifier = s.p.random(0, stepMax);

  if (qualifier < probability) {
    s.x += s.p.random(-stepSize, stepSize);
    s.y += s.p.random(-stepSize, stepSize);
  }
}


export function perlin(s) {
  const nx = s.p.noise(s.xoff);
  const ny = s.p.noise(s.yoff);
  s.x = s.p.map(nx, 0, 1, 0, s.p.width);
  s.y = s.p.map(ny, 0, 1, 0, s.p.height);
  s.xoff += 0.01;
  s.yoff += 0.01;
}
