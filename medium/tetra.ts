/**
 * Find the nth Tetrahedral Number
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Create a function that takes an integer n and returns the nth tetrahedral number.
 *
 * Test Cases:
 * tetra(2) ➞ 4
 * tetra(5) ➞ 35
 * tetra(6) ➞ 56
 *
 * @param n number to get the tetrahedral number of
 */

const tetra = (n: number): number => (n * (n + 1) * (n + 2)) / 6;
