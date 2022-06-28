"use strict";
/**
 * re-arrange a given array into
 * an array of 'N' number of chuncks 
 */

/**
 * 
 * @param arr input array for 
 * @param n number of chunks 
 * @returns 2-D array of chunks
 */
const groupArrayElements = function (arr: number[], n: number) {
  const res: number[][] = [];
  for (let i = 0; i < arr.length; i += n) {
    const part = arr.slice(i, i + n);
    res.push(part);
  }
  return res;
};

function main() {
  let result = groupArrayElements([1, 2, 3, 4, 5], 2);
  return;
}

main();
