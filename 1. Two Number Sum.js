// 1. Two Number Sum Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum. You can assume that there will be at most one pair of numbers summing up to the target sum. Sample input: array = [3, 5, -4, 8, 11, 1, -1, 6], targetSum = 10 Sample output: [-1, 11]

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

// O(n^2)
const twoNumberSum = (arr, targetNum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetNum) {
        result.push(arr[i], arr[j]);
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

// console.log(twoNumberSum(array, targetSum)); // [-1, 11];

// O(n)
const twoNumberSumSet = (arr, targetSum) => {
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    const complementNum = targetSum - currNum;
    if (numSet.has(complementNum)) {
      return [currNum, complementNum];
    }
    numSet.add(currNum);
  }
  return [];
};

console.log(twoNumberSumSet(array, targetSum)); // [-1, 11];
