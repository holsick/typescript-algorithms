/**
 * Which Function Returns the Larger Number?
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that takes two parameters (f, g) which are anonymous functions that return a number.
 * which ever function returns the larger number, return the variable name as a string.
 *
 * Test Cases:
 * whichIsLarger(() => 5, () => 10) ➞ "g"
 * whichIsLarger(() => 25,  () => 25) ➞ "neither"
 * whichIsLarger(() => 505050, () => 5050) ➞ "f"
 */

type WhichIsLargerParam = () => number;

const whichIsLarger = (f: WhichIsLargerParam, g: WhichIsLargerParam): string => {
  if (f() > g()) return 'f';
  if (g() > f()) return 'g';
  return 'neither';
};
