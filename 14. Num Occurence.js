// You are given an integer array nums, an integer array queries, and an integer x.
// For each queries[i], you need to find the index of the queries[i]th occurrence of x in the nums array. If there are fewer than queries[i] occurrences of x, the answer should be -1 for that query.

const nums = [1, 3, 1, 7];
const queries = [1, 3, 2, 4];
const x = 1;

const numOccurence = (nums, queries, x) => {
  const numsIndex = []; // record indexes of each occurence of x

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      numsIndex.push(i);
    }
  }

  const result = [];
  for (let query of queries) {
    if (query <= numsIndex.length) {
      result.push(numsIndex[query - 1]); // retrieve the index of the occurence of x
    } else {
      result.push(-1);
    }
  }
  return result;
};

console.log(numOccurence(nums, queries, x));
