/**
 * Check if One Array can be Nested in Another
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that returns true if the first array can be nested inside the second.
 *
 * Comments:
 * arr1 can be nested inside arr2 if:
 *  * arr1 min > arr2 min
 *  * arr1 max < arr2 max
 *
 * @param x first array of numbers
 * @param y second array of numbers
 */

const canNest = (x: number[], y: number[]): boolean => {
  return Math.min(...x) > Math.min(...y) && Math.max(...x) < Math.max(...y) ? true : false;
};
