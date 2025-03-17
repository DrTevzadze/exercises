// 7. Palindrome Check Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome. A palindrome is defined as a string that's written the same forward and backward. Sample input: "abcdcba" Sample output: true

const string = "abcdcba";

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome(string)); // true
