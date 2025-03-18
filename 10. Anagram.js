// 10. Valid Anagram Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Sample input: s = "anagram", t = "nagaram" Sample output: true

const s = "anagram";
const t = "nagaram";

// O(n)
const anagramFunc = (s, t) => {
  if (s.length !== t.length) return false;
  const newMap = new Map();

  for (const char of s) {
    if (newMap.has(char)) {
      newMap.set(char, newMap.get(char) + 1);
    } else {
      newMap.set(char, 1);
    }
  }
  for (const char of t) {
    if (!newMap.has(char)) return false;
    newMap.set(char, newMap.get(char) - 1);
    if (newMap.get(char) < 0) return false;
  }
  return true;
};

console.log(anagramFunc(s, t)); // true
