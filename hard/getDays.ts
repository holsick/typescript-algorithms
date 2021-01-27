/**
 * How Many Days Between Two Dates
 * Resource: edabit
 * Difficulty: hard
 * 
 * Description:
 * Create a function that takes two dates and returns the number of days between the first and second date.
 * 
 * Test Cases:
 * getDays(
 *  new Date("June 14, 2019"),
 *   new Date("June 20, 2019")
 * ) ➞ 6
 * getDays(
 *  new Date("December 29, 2018"),
 *  new Date("January 1, 2019")
 * ) ➞ 3
 * getDays(
 *  new Date("July 20, 2019"),
 *  new Date("July 30, 2019")
 * ) ➞ 10
 * 
 * @param first 
 * @param second 
 */

const getDays = (first: Date, second: Date): number => {
  const timeDifference = first.getTime() - second.getTime();
  return Math.abs(timeDifference / (1000 * 3600 * 24));
};
