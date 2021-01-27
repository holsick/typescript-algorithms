/**
 * Number of Boomerangs
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Create a function that returns the total number of boomerangs in an array.
 * Boomerang = [3, 7, 3], [1, -1, 1], [5, 6, 5]
 *
 * Test Cases:
 * countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
 * countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
 * countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
 *
 * @param arr array to check for boomerangs in
 */

const countBoomerangs = (arr: number[]): number => {
  return arr.filter((num, index) => {
    if (num !== arr[index - 1] && num !== arr[index + 1]) {
      if (arr[index - 1] === arr[index + 1]) return num;
    }
  }).length;
};
