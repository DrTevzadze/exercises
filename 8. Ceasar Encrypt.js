// 8. Caesar Cipher Encryptor Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a. Sample input: string = "xyz", key = 2 Sample output: "zab"

const str = "xyz";

const ceaserCipher = (str, key) => {
  let result = "";
  const newKey = key % 26;

  for (let char of str) {
    let newCharCode = char.charCodeAt(0) + newKey;
    if (newCharCode > 122) {
      newCharCode = 96 + (newCharCode % 122);
    }
    result += String.fromCharCode(newCharCode);
  }
  return result;
};

console.log(ceaserCipher(str, 2)); // "zab"
