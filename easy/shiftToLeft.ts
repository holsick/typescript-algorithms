/**
 * Left Shift by Powers of Two
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
 *
 * Test Cases:
 * shiftToLeft(5, 2) ➞ 20
 * shiftToLeft(10, 3) ➞ 80
 * shiftToLeft(-32, 2) ➞ -128
 * shiftToLeft(-6, 5) ➞ -192
 * shiftToLeft(12, 4) ➞ 192
 * shiftToLeft(46, 6) ➞ 2944
 *
 * @param x first number
 * @param y second number
 */

const shiftToLeft = (x: number, y: number): number => x * 2 ** y;
