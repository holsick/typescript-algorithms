/**
 * This is the same challenge as the leftShift file in the easy folder. This one forces y to be positive.
 *
 * @param x
 * @param y
 */

const shiftToLeftWithoutOperator = (x: number, y: number): number => {
  y = Math.abs(y);
  return x * 2 ** y;
};
