// F = (Gm1m2 / r^2) r^
export function getGravity(G, m1, m2, distance) {
  return (G * m1 * m2) / (distance * distance);
}

export function applyWind(m) {
  const wind = m.p.createVector(0.001, 0);
  m.applyForce(wind);
}
