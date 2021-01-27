/**
 * Matchstick Houses
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
 *
 * Comments:
 * The houses are merged at the center matchstick
 *
 * Test Cases:
 * matchHouses(1) ➞ 6
 * matchHouses(4) ➞ 21
 * matchHouses(87) ➞ 436
 *
 * @param num represents the number of houses
 */

const matchHouses = (num: number): number => {
  if (num == 0) return 0;
  if (num == 1) return 6;
  return num * 5 + 1;
};
