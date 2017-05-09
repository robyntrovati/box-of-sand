import p5 from 'p5';


export function constrainToCanvas(velocity, position, width, height, offsetX = 1, offsetY = 1, bottomOpen = false) {
  if (position.x > width - offsetX) {
    velocity.x *= -1;
    // Additional 1px to visually clear edge
    position.x = width - (offsetX + 1);
  }

  if (position.x < 0 + offsetX) {
    velocity.x *= -1;
    position.x = offsetX + 1;
  }

  if (!bottomOpen) {
    if (position.y > height - offsetY) {
      velocity.y *= -1;
      position.y = offsetY + 1;
    }
  }

  if (position.y < 0 + offsetY) {
    velocity.y *= -1;
    position.y = offsetY + 1;
  }
}


export function accelerationTowardsMouse(m) {
  const mouse = m.p.createVector(m.p.mouseX, m.p.mouseY);
  const direction = p5.Vector.sub(mouse, m.position);
  direction.setMag(0.5);  // Slow it down
  return direction;
}
