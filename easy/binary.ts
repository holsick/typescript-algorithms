/**
 * Convert a Number to Base-2
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number.
 *
 * Test Cases:
 * binary(1) ➞ "1"
 * binary(5) ➞ "101"
 * binary(10) ➞ "1010"
 *
 * @param num number to convert to binary
 */

const binary = (num: number): string => {
  if (num <= 0 || num > 1024) return '0';
  return num.toString(2);
};
