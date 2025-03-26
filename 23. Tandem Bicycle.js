const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];

const tandem = (red, blue, fastest) => {
  const sortRed = red.sort((a, b) => a - b);
  const sortBlue = blue.sort((a, b) => (fastest ? b - a : a - b));

  let totalSum = 0;

  for (let i = 0; i < sortRed.length; i++) {
    if (fastest) {
      totalSum += Math.max(sortRed[i], sortBlue[i]);
    } else {
      totalSum += Math.max(sortRed[i], sortBlue[i]);
    }
  }
  return totalSum;
};

console.log(tandem(redShirtSpeeds, blueShirtSpeeds, true)); // 25 is wrong - should be 32.
