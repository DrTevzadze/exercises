// 4. Best Time to Buy and Sell Stock You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. Sample input: prices = [7, 1, 5, 3, 6, 4] Sample output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const array = [7, 1, 5, 3, 6, 4];

const timeToBuyStocks = (arr) => {
  if (arr.length <= 1) return `Array needs to have at least 2 values`;
  let minPrice = arr[0];
  let maxProfit = 0; // If profit is not found, func will return 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }
    if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(timeToBuyStocks(array)); // 5
