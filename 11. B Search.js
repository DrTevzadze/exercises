// 11. Binary Search Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1. Sample input: array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], target = 33 Sample output: 3

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;

// O(log n)
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return `${target} not found!`;
};

console.log(binarySearch(array, target)); // 3
