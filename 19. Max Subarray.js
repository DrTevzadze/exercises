// 19. Maximum Subarray Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. Sample input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Sample output: 6 (subarray [4, -1, 2, 1])

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Kadane's Alg O(n)
const maxSub = (arr) => {
  let currSum = arr[0];
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

console.log(maxSub(nums)); // 6
