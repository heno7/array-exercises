// Ex1
// 1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

// Example: 	array1 = [1,2,3,4,5,6];
// 			array2 = [3,4,8,9,12];
// 			=> [3,4]

// function findSameElements(arr1, arr2) {
//   const result = [];
//   let loopedArr, compareArr;
//   [loopedArr, compareArr] =
//     arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

//   for (let ele of loopedArr) {
//     if (compareArr.indexOf(ele) !== -1) result.push(ele);
//   }

//   return result;
// }

function findSameElements(arr1, arr2) {
  return arr1.filter((ele) => arr2.includes(ele));
}

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [3, 4, 8, 9, 12];

console.log(findSameElements(array1, array2));
