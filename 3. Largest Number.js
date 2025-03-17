// Find Three Largest Numbers Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary. Sample input: array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7] Sample output: [18, 141, 541]

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

const findLargestNumber = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const maxNumber = Math.max(...arr); // Find max number
    result.unshift(maxNumber); // Add to beginning => No sorting needed at the end
    const indexOfNumber = arr.findIndex((num) => num === maxNumber); // Find index of the max number
    arr.splice(indexOfNumber, 1); // Remove max number
    if (result.length === 3) return result;
  }
  return result;
};

console.log(findLargestNumber(array)); // [18, 141, 541]
