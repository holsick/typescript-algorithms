/**
 * Wrong Number
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * See https://edabit.com/challenge/vshi8S62X7ASdEB2c for a detailed description of the problem
 *
 * Test Cases:
 * arr1=[
 * [2, 2, 3, 6 ],
 * [4, 5, 6, 15],
 * [7, 8, 9, 24],
 * [12,15,18,45]
 * ]
 * arr2=[
 * [1, 2, 3, 7 ],
 * [4, 5, 6, 15],
 * [7, 8, 9, 24],
 * [12,15,18,45]
 * ]
 * arr3=[
 * [1, 2, 3, 6 ],
 * [4, 5, 6, 15],
 * [7, 8, 9, 24],
 * [12,15,18,46]
 * ]
 * wrongNumber(arr1) ➞ 1
 * wrongNumber(arr2) ➞ 6
 * wrongNumber(arr3) ➞ 45
 *
 * @param arr
 */

const wrongNumber = (arr: number[][]): number | undefined => {
  const rcFilter = (arr: number[][]): number[] => {
    return arr
      .filter((value) => {
        const firstThreeSum = value.slice(0, -1).reduce((a, b) => a + b, 0);
        return firstThreeSum !== value[value.length - 1];
      })
      .flat();
  };

  const getColumns = (): number[][] => {
    return [...new Array(4)].map((_value, index) => arr.map((val) => val[index]));
  };

  const checkMath = (arr: number[]): boolean => {
    const firstThreeSum = arr.slice(0, -1).reduce((a, b) => a + b, 0);
    return firstThreeSum === arr[arr.length - 1] ? true : false;
  };

  const getMath = (arr: number[]): number => {
    const firstThreeSum = arr.slice(0, -1).reduce((a, b) => a + b, 0);
    return firstThreeSum;
  };

  const [firstCol, secondCol, thirdCol, fourthCol] = getColumns();

  const checkCol = rcFilter(getColumns());

  if (checkCol.every((item, index) => item === firstCol[index])) {
    for (let i of arr) {
      if (checkMath(i) === false) {
        return getMath(i) > i[i.length - 1] ? i[0] - 1 : i[0] + 1;
      }
    }
  } else if (checkCol.every((item, index) => item === secondCol[index])) {
    for (let j of arr) {
      if (checkMath(j) === false) {
        return getMath(j) < j[j.length - 1] ? j[1] - 1 : j[1] + 1;
      }
    }
  } else if (checkCol.every((item, index) => item === thirdCol[index])) {
    for (let k of arr) {
      if (checkMath(k) === false) {
        return getMath(k) < k[k.length - 1] ? k[2] - 1 : k[2] + 1;
      }
    }
  } else if (checkCol.every((item, index) => item === fourthCol[index])) {
    for (let n of arr) {
      if (checkMath(n) === false) {
        return getMath(n) < n[n.length - 1] ? n[3] - 1 : n[3] + 1;
      }
    }
  } else {
    return undefined;
  }
};
