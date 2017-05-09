// Fd = -1/2ρ||v||^2ACdv^
// ρ = density
// ||v|| = vector magnitude
// A = surface area
// Cd = coefficient of drag
// v^ = unit vector

export class Liquid {
  constructor(p, x, y, width, height, c) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = c;
  }

  contains(m) {
    return (
      m.position.x > this.x &&
      m.position.x < this.x + this.width &&
      m.position.y > this.y &&
      m.position.y < this.y + this.height
    );
  }

  drag(m) {
    // Ignoring density and surface area for now
    const speed = m.velocity.mag();
    const dMag = m.velocity.magSq() * -this.c;  // ||v||^2 * Cd
    const drag = m.velocity.copy();
    drag.setMag(dMag);
    return drag;
  }

  display() {
    this.p.noStroke();
    this.p.fill(175);
    this.p.rect(this.x, this.y, this.width, this.height);
  }
}
