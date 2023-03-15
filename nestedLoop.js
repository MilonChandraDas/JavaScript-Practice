/**
 *  QUESTION NO -> 1
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

// let n = 5;
// let sum = "";
// for (let i = 1; i <= n; i++) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     result = result + j + " ";
//   }
//   console.log(result);
// }

/**  QUESTION NO -> 2
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 */
let n = 5;
for (let i = 1; i <= n; i++) {
  let result = " ";
  for (let j = 1; j <= n; j++) {
    result += "* ";
  }
  console.log(result);
}
