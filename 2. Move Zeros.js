// 2. Move Zeroes Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. Sample input: nums = [0, 1, 0, 3, 12] Sample output: [1, 3, 12, 0, 0]

const array = [0, 1, 0, 3, 12];

// Two-Pointer method O(n) - Swap
const moveZeroes = (arr) => {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
      left++;
    }
  }
  return arr;
};

console.log(moveZeroes(array)); // [1, 3, 12, 0, 0]
