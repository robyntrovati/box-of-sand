export class ParticleSystem {
  constructor(p) {
    this.p = p;
    this.particles = [];
  }

  addParticle(particle) {
    this.particles.push(particle);
  }

  applyForce(force) {
    this.particles.forEach((p) => p.applyForce(force));
  }

  render() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.render();

      if (p.shouldDestroy()) {
        this.particles.splice(i, 1);
      }
    }
  };
}
