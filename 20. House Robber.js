// 20. House Robber You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an array of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police. Sample input: nums = [1, 2, 3, 1] Sample output: 4 (Rob house 1 (money = 1) and then rob house 3 (money = 3))

const nums = [1, 2, 3, 1];

const houseRobber = (num) => {
  if (num.length === 0) return 0;
  if (num.length === 1) return num[0];

  let maxProfit = 0;
  let currMaxProfit = 0;

  for (let num of nums) {
    let temp = Math.max(currMaxProfit, num + maxProfit);
    maxProfit = currMaxProfit;
    currMaxProfit = temp;
  }

  return currMaxProfit;
};

console.log(houseRobber(nums)); // 4
