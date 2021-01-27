/**
 * Concatenate Variable Number of Input Arrays
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Create a function that concatenates n input arrays, where n is variable.
 *
 * @param args unlimited amount of arguments (must be an array)
 */

const concat = (...args: any[]): number[] => {
  return args
    .map((arg) => {
      if (Array.isArray(arg)) {
        if (arg.length > 1) arg = arg.join(',').split(',');
      }
      return arg;
    })
    .flat()
    .map((value) => parseInt(value));
};
