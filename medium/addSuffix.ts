/**
 * All About Anonymous Functions: Adding Suffixes
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
 *
 * Test Cases:
 * add_ly = add_suffix("ly")
 * add_ly("hopeless") ➞ "hopelessly"
 * add_ly("total") ➞"totally"
 * add_less = add_suffix("less")
 * add_less("fear") ➞ "fearless"
 * add_less("ruth") ➞ "ruthless"
 *
 * @param str represents both the word and the suffix
 */

const addSuffix = (str: string): ((suffix: string) => string) => (suffix) => str + suffix;
