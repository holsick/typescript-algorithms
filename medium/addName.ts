/**
 * Burglary Series (04): Add its Name
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
 *
 * Test Cases:
 * addName({}, "Brutus", 300) ➞ { Brutus: 300 }
 * addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
 * addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
 *
 * @param obj can be any object
 * @param name any string
 * @param value any number
 */

const addName = (obj: object, name: string, value: number): object => {
  obj[name] = value;
  return obj;
};
