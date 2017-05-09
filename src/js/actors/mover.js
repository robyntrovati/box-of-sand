import p5 from 'p5';
import { constrainToCanvas } from '../utils';


export class Mover {
  constructor(p, mass, position, topSpeed) {
    this.p = p;
    this.mass = mass;
    this.position = position.copy();
    this.velocity = p.createVector(0, 0);
    this.acceleration = p.createVector(0, 0);
    this.topSpeed = topSpeed;
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    if (this.topSpeed) this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);

    constrainToCanvas(this.velocity, this.position, this.p.width, this.p.height);
    this.acceleration.mult(0);  // Clear acceleration for each new frame
  }

  render() {
    this.p.stroke(0);
    this.p.fill(0);

    // Gravity sketch
    this.p.ellipse(this.position.x, this.position.y, this.mass * 10, this.mass * 10);

    // Pointed velocity sketch
    // var angle = this.velocity.heading();
    // this.p.push();
    // this.p.translate(this.position.x, this.position.y);
    // this.p.rotate(angle);
    // this.p.rect(0, 0, this.mass * 10, this.mass * 5);
    // this.p.pop();
  }
}
