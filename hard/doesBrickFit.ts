/**
 * Check if the Brick Fits through the Hole
 * Resource: edabit
 * Difficulty: hard
 *
 * Description:
 * Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
 *
 * Test Cases:
 * doesBrickFit(1, 1, 1, 1, 1) ➞ true
 * doesBrickFit(1, 2, 1, 1, 1) ➞ true
 * doesBrickFit(1, 2, 2, 1, 1) ➞ false
 *
 */

type BrickFitCalculator = (a: number, b: number, c: number, w: number, h: number) => boolean;

const doesBrickFit: BrickFitCalculator = (
  brickHeight,
  brickWidth,
  brickDepth,
  holeWidth,
  holeHeight
) => {
  const brickArray = [brickHeight, brickWidth, brickDepth, holeWidth, holeHeight];
  const brick = brickArray.slice(0, 3);
  const hole = brickArray.slice(3).reduce((a, b) => a * b);
  const brickAreaArray = brick.map((value, index) => {
    switch (index) {
      case 0:
      case 1:
        return value * brick[index + 1];
      case 2:
        return brick[index - 2] * value;
      default:
        return;
    }
  });
  return brickAreaArray.some((element) => element <= hole);
};
