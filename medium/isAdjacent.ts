/**
 * Finding Adjacent Nodes
 * Resource: edabit
 * Difficulty: medium
 *
 * Description:
 * Your task is to determine if two nodes are adjacent in a graph when given the adjacency matrix and the two nodes.
 *
 * Test Cases:
 * https://edabit.com/challenge/N7PGFudDcNh5aueS3
 * See above link for test cases as it is easier to visualize with the graphs
 *
 * @param matrix nested array of array of numbers representing the adjacency matrix
 * @param x first node
 * @param y second node
 */

const isAdjacent = (matrix: number[][], x: number, y: number): boolean => {
  for (let arr = 0; arr < matrix.length; arr++) {
    for (let num = 0; num < matrix.length; num++) {
      if (matrix[x][y] === 1) return true;
      else return false;
    }
  }
};
