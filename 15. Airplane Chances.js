// n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of the passengers will:
// Take their own seat if it is still available, and
// Pick other seats randomly when they find their seat occupied
// Return the probability that the nth person gets his own seat.
// Example 1:
// Input: n = 1
// Output: 1.00000
// Explanation: The first person can only get the first seat.
// Example 2:
// Input: n = 2
// Output: 0.50000

const chanceToGetSeat = (n) => {
  if (n === 1) return 1;
  return 0.5; // The chance is always going to be 50/50, unless there's only 1 passenger on the plane
};

console.log(chanceToGetSeat(5));
