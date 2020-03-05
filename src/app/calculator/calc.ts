/* jslint node: true */
function multiply(arr: Array<number>): number {
  return arr.reduce((prev, currentV) => prev * currentV, 1);
}

export default multiply;
