/**
 * Add up the Numbers from a Single Number
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 *
 * Test Cases:
 * addUp(4) ➞ 10
 * addUp(13) ➞ 91
 * addUp(600) ➞ 180300
 *
 * @param num represents the maximum number in the created array
 */

const addUp = (num: number): number => {
  const numArray = [...new Array(num)].map((_value, index) => index + 1);
  return numArray.reduce((prev, curr) => prev + curr, 0);
};
