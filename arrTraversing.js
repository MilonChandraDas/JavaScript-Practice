// let array = [1, 2, 8, 10, 12, 14, 16, 18, 20, 21];

// for (let i = 0; i < array.length; i++) {
//      console.log(array[i]);
// }
// ============================

// // Array Sum
// sum = 0;
// for(let j = 0; j<array.length;j++){
//      sum += array[j]
// }
// console.log(sum);
// ============================

// Array Even Number sum
// for (let a = 0; a < array.length; a++) {
//   if (array[a] % 2 === 0) {
//     sum += array[a];
//   }
// }
// console.log(sum);
// ============================

// ARRAY INSERTION AND REMOVE
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // arr.splice(3,0,55)
// // console.log(arr);
// arr.splice(4, 0, '');
// console.log(arr);

//REVERSE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.reverse());

for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr);

// ============================
// ============================
// ============================
// ============================
// ============================
// ============================
