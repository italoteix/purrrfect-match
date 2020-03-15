// mostly inspired by tailwind (https://tailwindcss.com/docs/breakpoints/)
const sizes = {
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phablet: 640,
  phone: 400
};

const breakpoints = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = `(min-width: ${emSize}em)`;
  return accumulator;
}, {});

export default breakpoints;
