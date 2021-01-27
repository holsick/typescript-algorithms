/**
 * Converting Objects to Arrays
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
 *
 * Test Cases:
 * toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 * toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
 * toArray({}) ➞ []
 *
 * @param obj object to convert to an array
 */

const toArray = (obj: object): [string, any][] =>
  Object.keys(obj).length ? Object.entries(obj) : [];
