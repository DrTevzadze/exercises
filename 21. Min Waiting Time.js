// 21. Minimum Waiting Time You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order. A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries. Write a function that returns the minimum amount of total waiting time for all of the queries. Sample input: queries = [3, 2, 1, 2, 6] Sample output: 17

const queries = [3, 2, 1, 2, 6];

const minWaitingTime = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b); // 1, 2, 2, 3, 6

  let totalTime = 0;
  let sum = 0;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    sum += sortedArr[i];
    totalTime += sum;
  }
  return totalTime;
};

console.log(minWaitingTime(queries)); // 17
