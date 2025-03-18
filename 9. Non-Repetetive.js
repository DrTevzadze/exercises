// 9. First Non-Repeating Character Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character. The first non-repeating character is the first character in a string that occurs only once. If the input string doesn't have any non-repeating characters, your function should return -1. Sample input: string = "abcdcaf" Sample output: 1 (b is the first non-repeating character)

// O(n)
const firstNonChar = (str) => {
  const newMap = new Map();

  for (const char of str) {
    if (newMap.has(char)) {
      newMap.set(char, newMap.get(char) + 1);
    } else {
      newMap.set(char, 1);
    }
  }
  for (const [key, value] of newMap) {
    if (value === 1) {
      return str.indexOf(key);
    }
  }
  return -1;
};

console.log(firstNonChar("abcdcabf")); // 1
