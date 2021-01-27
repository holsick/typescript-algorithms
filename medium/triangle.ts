/**
 * Triangle Number Sequence
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Write a function that gives the number of dots with its corresponding triangle number of the sequence.
 *
 * Test Cases:
 * triangle(1) ➞ 1
 * triangle(6) ➞ 21
 * triangle(215) ➞ 23220
 *
 * @param num number to calculate the number of dots it would have in the triangle number sequence
 */

const triangle = (num: number): number => {
  return Array.from({ length: num }, (_value, index) => index + 1).reduce((prev, cur) => {
    return prev + cur;
  }, 0);
};
