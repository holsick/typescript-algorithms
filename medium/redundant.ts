/**
 * A Redundant Function
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Write a function redundant that takes in a string str and returns a function that returns str.
 *
 * Test Cases:
 * const f1 = redundant('apple'); f1();
 * const f2 = redundant('pear'); f2();
 * const f3 = redundant(''); f3();
 *
 * @param str string to pass through the functions
 */

const redundant = (str: string): (() => string) => () => str;
