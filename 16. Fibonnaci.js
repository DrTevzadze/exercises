// 16. Nth Fibonacci The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number. Sample input: n = 6 Sample output: 5 (0, 1, 1, 2, 3, 5)

const number = 6;

// Recursive method F(n) = F(n - 1) + F(n - 2);
const fibonnaci = (num) => {
  if (num === 1) return 0;
  if (num === 2) return 1;

  return fibonnaci(num - 1) + fibonnaci(num - 2);
};

console.log(fibonnaci(number)); // 5
