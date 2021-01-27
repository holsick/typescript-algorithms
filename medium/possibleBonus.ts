/**
 * Tile Teamwork Tactics
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.
 * If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 * Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
 *
 * Test Cases:
 * possibleBonus(3, 7) ➞ true
 * possibleBonus(1, 9) ➞ false
 * possibleBonus(5, 3) ➞ false
 *
 * @param x
 * @param y
 */

const possibleBonus = (x: number, y: number): boolean => {
  if (x > y || x == y) return false;
  return Math.abs(y) - Math.abs(x) <= 6 ? true : false;
};
