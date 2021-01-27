/**
 * Seven Boom!
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Create a function that takes an array of numbers and return "Boom!".
 * if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
 *
 * Test Cases:
 * sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
 * sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
 * sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
 *
 *
 * @param numArr
 */

const sevenBoom = (numArr: number[]): string =>
  numArr.includes(7) ? 'Boom!' : 'there is no 7 in the array';
