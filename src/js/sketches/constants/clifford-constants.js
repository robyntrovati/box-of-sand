let c1r = 255;
let c2r = 0;

export const clifford1 = {
  a: 2.2,
  b: 1.6,
  c: 1,
  d: 0.7,
  background: 255,
  increment: -0.005,
  startColor: `rgba(${c1r}, 0, 0, 0.2)`,
  updateColor: () => {
    if (c1r === 0) return null;
    c1r--;
    return `rgba(${c1r}, 0, 0, 0.2)`;
  },
};

export const clifford2 = {
  a: -2.0,
  b: 1.6,
  c: -2.0,
  d: 0.7,
  background: 0,
  increment: 0.005,
  startColor: `rgba(${c2r}, 0, 0, 0.2)`,
  updateColor: () => {
    if (c2r === 255) return null;
    c2r++;
    return `rgba(${c2r}, 0, 0, 0.2)`;
  },
};
