/**
 * How Much is True?
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Create a function which returns the number of true values there are in an array.
 *
 * Test Cases:
 * countTrue([true, false, false, true, false]) ➞ 2
 * countTrue([false, false, false, false]) ➞ 0
 * countTrue([]) ➞ 0
 *
 * @param arr array of boolean values
 */

const countTrue = (arr: boolean[]): number => {
  if (!arr.length) return 0;
  let trueCount = 0;
  for (let value of arr) if (value) trueCount++;
  return trueCount;
};
