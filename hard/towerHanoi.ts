/**
 * Tower of Hanoi
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
 * See https://edabit.com/challenge/3ZtykTsx3GSoPHyBb for more details
 *
 * Test Cases:
 * towerHanoi(3) ➞ 7
 * towerHanoi(5) ➞ 31
 * towerHanoi(0) ➞ 0
 *
 * @param disks represents the disks in the Tower of Hanoi game
 */

const towerHanoi = (disks: number): number => 2 ** Math.abs(disks) - 1;
