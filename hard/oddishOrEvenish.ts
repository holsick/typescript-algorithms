/**
 * Oddish vs. Evenish
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Create a function that determines whether a number is Oddish or Evenish.
 * A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.
 * If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
 *
 * Test Cases:
 * oddishOrEvenish(43) ➞ "Oddish"
 * oddishOrEvenish(373) ➞ "Oddish"
 * oddishOrEvenish(4433) ➞ "Evenish"
 *
 * @param num value to check
 */

const oddishOrEvenish = (num: number): string => {
  const strNum = num.toString();
  const check = strNum
    .split('')
    .map((value) => parseInt(value))
    .reduce((prev, cur) => prev + cur, 0);
  return check % 2 === 0 ? 'Evenish' : 'Oddish';
};
