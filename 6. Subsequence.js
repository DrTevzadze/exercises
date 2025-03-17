// 6. Validate Subsequence Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Sample input: array = [5, 1, 22, 25, 6, -1, 8, 10], sequence = [1, 6, -1, 10] Sample output: true

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

// Two-Pointer method
const validate = (arr, sequence) => {
  let seqPointer = 0;

  for (let arrPointer = 0; arrPointer < arr.length; arrPointer++) {
    if (arr[arrPointer] === sequence[seqPointer]) {
      seqPointer++;
    }
    if (seqPointer === sequence.length) return true; // If we find all the matches, return true;
  }

  return false;
};

console.log(validate(array, sequence)); // true
