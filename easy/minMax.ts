/**
 * Find the Smallest and Biggest Numbers
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that takes an array of numbers and return both minimum and maximum numbers, in that order
 *
 * Test Cases:
 * minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * minMax([2334454, 5]) ➞ [5, 2334454]
 * minMax([1]) ➞ [1, 1]
 *
 * @param arr array of numbers
 */

const minMax = (arr: number[]): number[] => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const result = new Array(min, max);
  return result;
};
