export class Oscillator {
  constructor(p, velocity, amplitude, period) {
    this.p = p;
    this.angle = p.createVector();
    this.velocity = velocity;

    // Distance from the center of motion to either extreme
    this.amplitude = amplitude;

    // Number of frames in which to complete one cycle of motion
    this.period = period;
  }

  render() {
    // cosine = adjacent / hypotenuse
    // sine = opposite / hypotenuse
    // cosine(theta) = x / r  ->  x = r * cosine(theta)
    // sine(theta) = y / r    ->  y = r * sine(theta)

    // Using framecount and period to calculate theta
    const x = this.amplitude.x * this.p.cos(this.p.TWO_PI * this.p.frameCount / this.period);
    const y = this.amplitude.y * this.p.sin(this.p.TWO_PI * this.p.frameCount / this.period);

    // Using arbitrary incremented value for theta
    // this.angle.add(this.velocity);
    // const x = this.amplitude.x * this.p.sin(this.angle.x);
    // const y = this.amplitude.y * this.p.cos(this.angle.y);

    this.p.push();
    this.p.translate(this.p.width / 2, this.p.height / 2);
    this.p.stroke(0);
    this.p.fill(127, 127);
    this.p.ellipse(x, y, 20, 20);
    this.p.pop();
  }
}
