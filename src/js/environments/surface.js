// F = -1μNv^
// μ = coefficient of friction
// N = normal force
// v^ = unit vector (sublime won't let me do a proper circumflex)

export class Surface {
  constructor(p, x, y, width, height, c) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = c;
  }

  // TODO: isTouching method

  drag(m) {
    // Ignoring density and surface area for now
    const normal = 1;
    const fMag = -cof * normal;
    const friction = m.velocity.copy();
    friction.setMag(fMag);
    return friction;
  }

  display() {
    this.p.noStroke();
    this.p.fill(175);
    this.p.rect(this.x, this.y, this.width, this.height);
  }
}
