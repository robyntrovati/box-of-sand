import p5 from 'p5';
import { getGravity } from '../forces/forces';


export class Attractor {
  constructor(p, position, mass, G) {
    this.p = p;
    this.position = position.copy();
    this.mass = mass;
    this.G = G;
    this.dragOffset = p.createVector(0, 0);
    this.dragging = false;
  }

  getForce(m) {
    const force = p5.Vector.sub(this.position, m.position);

    let distance = force.mag();
    distance = this.p.constrain(distance, 5, 25);  // Make it pretty
    force.normalize();

    const strength = getGravity(this.G, this.mass, m.mass, distance);
    force.mult(strength);
    return force;
  }

  handlePress(mx, my) {
    const d = this.p.dist(mx, my, this.position.x, this.position.y);

    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.position.x - mx;
      this.dragOffset.y = this.position.y - my;
    }
  };

  handleDrag(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }
  };

  handleStopDrag() {
    this.dragging = false;
  };

  render() {
    this.p.fill(100, 100);
    this.p.noStroke();
    this.p.ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
  }
}
