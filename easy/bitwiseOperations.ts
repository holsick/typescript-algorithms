/**
 * Bitwise Operations
 * Resource: edabit
 * Difficulty: easy
 *
 * Description:
 * Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
 *
 * Test Cases:
 * BitwiseOperations.bitwiseAND(7, 12) => 4
 * BitwiseOperations.bitwiseOR(7, 12) => 15
 * BitwiseOperations.bitwiseXOR(7, 12) => 11
 *
 * Comments:
 * I chose to use a class for the organization of the functions as static properties
 */

class BitwiseOperations {
  static bitwiseAND(x: number, y: number): number {
    return parseInt((x & y).toString());
  }

  static bitwiseOR(x: number, y: number): number {
    return parseInt((x | y).toString());
  }

  static bitwiseXOR(x: number, y: number): number {
    return parseInt((x ^ y).toString());
  }
}
