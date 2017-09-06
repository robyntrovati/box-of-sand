import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

function sketch(p) {
  let sound, fft, centroid;
  let centerX, centerY;
  let black01, black02;
  let white01, white02;

  function togglePlay(sound) {
    if (sound.isPlaying()) sound.pause();
    else sound.play();
  }

  function drawInitialLines(c) {
    p.stroke(black01);
    p.line(0, c, centerX - (c * 0.4), c);
    p.line(centerX + (c * 0.4), p.height - c, p.width, p.height - c);
    p.stroke(white01);
    p.line(c, 0, c, p.height - (c * 0.4));
    p.line(p.width - c, 0 + (c * 0.4), p.width - c, p.height);
  }

  function drawMirroredLines(c) {
    p.stroke(black01);
    p.line(0, p.height - c, centerX - (c * 0.4), p.height - c);
    p.line(centerX + (c * 0.4), c, p.width, c);
  }

  function drawCircles() {
    const d = p.map(centroid, 0, 8000, 0, p.width);
    p.noFill();
    p.stroke(black01);
    p.ellipse(centerX, centerY, d / 2);
    p.stroke(white01);
    p.ellipse(centerX, p.height / 2, (d / 2) - 100);
  }

  function drawRadialLines(c, color, offset = 0) {
    p.stroke(color);
    p.line(0, c - offset, centerX, centerY);  // Top left
    p.line(centerX, centerY, p.width, c - offset);  // Top right
    p.line(0, p.height - c + offset, centerX, centerY);  // Bottom left
    p.line(centerX, centerY, p.width, p.height - c + offset);  // Bottom right
  }

  p.preload = function() {
    sound = p.loadSound('assets/lorn_acid_rain.mp3');
  };

  p.setup = function() {
    var canvas = p.createCanvas(1000, 500);
    canvas.mouseClicked(togglePlay);

    centerX = p.width / 2;
    centerY = p.height / 2;

    black01 = p.color('rgba(0, 0, 0, 0.5)');
    black02 = p.color('rgba(0, 0, 0, 0.2)');
    white01 = p.color('rgba(255, 255, 255, 0.5)');
    white02 = p.color('rgba(255, 255, 255, 0.2)');

    fft = new p5.FFT();
    sound.play();
  };

  p.draw = function() {
    fft.analyze();
    centroid = fft.getCentroid();
    if (centroid === 0) return;

    const c = p.map(centroid, 0, 8000, 0, centerX);
    const currentTime = sound.currentTime().toFixed(2);

    drawInitialLines(c);
    if (currentTime > 52) drawCircles();
    if (currentTime > 65) drawMirroredLines(c);
    if (currentTime > 129.5 && currentTime < 151) drawRadialLines(c, white01);
    if (currentTime > 138.1 && currentTime < 151) drawRadialLines(c, white02, 200);
    if (currentTime > 151 && currentTime < 170) drawRadialLines(c, black02, 400);
    if (currentTime > 159.7 && currentTime < 170) drawRadialLines(c, black02, 600);
  };
}

new p5(sketch, 'sketch');
