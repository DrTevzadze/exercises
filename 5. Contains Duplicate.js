// 5. Contains Duplicate Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. Sample input: nums = [1, 2, 3, 1] Sample output: true

const array = [1, 2, 3, 1];

// O(n)
const containsDuplicate = (array) => {
  const setArray = new Set();

  for (let i = 0; i < array.length; i++) {
    if (setArray.has(array[i])) {
      return true;
    } else {
      setArray.add(array[i]);
    }
  }
  return false;
};

console.log(containsDuplicate(array)); // true
