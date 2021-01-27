/**
 * Single Occurrance
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that, given a string str, finds a letter that has a single occurance.
 * Return the letter in uppercase. If the input is empty. return an empty string ''.
 *
 * Test Cases:
 * singleOccurrence("EFFEAABbc") ➞ "C"
 * singleOccurrence("AAAAVNNNNSS") ➞ "V"
 * singleOccurrence("S") ➞ "S"
 *
 * @param str string to find the single occurance in
 */

const singleOccurance = (str: string): string => {
  if (str === '') return str;
  const strArray = str.split('');
  const singleOccurances = strArray.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  const results = Object.entries(singleOccurances)
    .filter((value) => {
      return value[1] === 1;
    })
    .map((nextValue) => nextValue[0]);
  if (results.length > 1) return results.join(', ').toUpperCase();
  return results.join('').toUpperCase();
};
