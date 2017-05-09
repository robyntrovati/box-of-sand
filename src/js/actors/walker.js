export class Walker {
  constructor(props) {
    for (let propName in props) {
      this[propName] = props[propName];
    }

    this.p.frameRate(this.frameRate || 20);
  }

  constrainCoords() {
    this.x = this.p.constrain(this.x, this.size, this.p.width - this.size);
    this.y = this.p.constrain(this.y, this.size, this.p.height - this.size);
  }

  render() {
    this.randomGen(this);
    this.constrainCoords();
    this.p.noStroke();
    this.p.fill(this.color);
    this.p.ellipse(this.x, this.y, this.size);
  }
}
