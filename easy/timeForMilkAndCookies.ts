/**
 * Is it Time for Milk and Cookies?
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.
 * Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
 *
 * Test Cases:
 * timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
 * timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
 * timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
 *
 * @param date date object written as `new Date(2021, 11, 24)`
 */

const timeForMilkAndCookies = (date: Date): boolean => {
  return date.getUTCMonth() === 11 && date.getUTCDate() === 24 ? true : false;
};
