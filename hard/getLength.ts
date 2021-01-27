/**
 * Length of a Nested Array
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Write a function that returns the total number of non-nested items in a nested array.
 *
 * Test Cases:
 * getLength([1, [2, 3]]) ➞ 3
 * getLength([1, [2, [3, 4]]]) ➞ 4
 * getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
 * getLength([1, [2], 1, [2], 1]) ➞ 5
 *
 * Comments:
 * This challenge was solved using recursion
 *
 * @param nestedArr
 */

const getLength = (nestedArr: any[]): number => {
  let valueCount = 0;
  for (let value of nestedArr) {
    if (Array.isArray(value)) {
      let newNestedArr = value.flat();
      valueCount += getLength(newNestedArr);
    } else {
      valueCount++;
    }
  }
  return valueCount;
};
