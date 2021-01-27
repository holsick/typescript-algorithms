/**
 * Numerical Morphisms
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Given a non-negative integer num, implement a function that returns the string:
 *  * "Polymorphic" if num is automorphic for every power from 2 up to 10.
 *  * "Quadrimorphic" if num is automorphic for only four powers (any from 2 up to 10).
 *  * "Dimorphic" if num is automorphic for only two powers (any from 2 up to 10).
 *  * "Enamorphic" if num is automorphic for only one power (any from 2 up to 10).
 *  * "Amorphic" if num is not automorphic for for any powers from 2 up to 10.
 *
 * Test Cases:
 * powerMorphic(5) ➞ "Polymorphic"
 * powerMorphic(21) ➞ "Enamorphic"
 * powerMorphic(7) ➞ "Dimorphic"
 * powerMorphic(4) ➞ "Quadrimorphic"
 * powerMorphic(10) ➞ "Amorphic"
 *
 * @param num
 */

const powerMorphic = (num: number): string => {
  num = Math.abs(num);
  const powerArray = Array.from({ length: 9 }, (_value, index) => index + 2);
  const elevatedArray = powerArray
    .map((power) => BigInt(num ** power))
    .map((elevated) => elevated.toString());
  const automorphicArray = elevatedArray.filter((value) => {
    const compareNum = num.toString();
    if (value.endsWith(compareNum)) return value;
  });
  switch (automorphicArray.length) {
    case 1:
      return 'Enamorphic';
    case 2:
      return 'Dimorphic';
    case 4:
      return 'Quadrimorphic';
    case 9:
      return 'Polymorphic';
    default:
      return 'Amorphic';
  }
};
